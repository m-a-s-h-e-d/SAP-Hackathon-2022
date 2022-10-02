import userModel from "../models/user";
import postModel from "../models/post";
import profileModel from "../models/profile";
import kudosModel from "../models/kudos";
import goalModel from "../models/goal";
import { SchemaType } from "../enums/schemaType";
import { QueryType } from "../enums/queryType";
import { ObjectId } from "mongodb";

function resolveSchemaType(type: SchemaType): any {
  let resolvedModel;

  switch (type) {
    case SchemaType.User:
      resolvedModel = userModel;
      break;
    case SchemaType.Post:
      resolvedModel = postModel;
      break;
    case SchemaType.Profile:
      resolvedModel = profileModel;
      break;
    case SchemaType.Kudos:
      resolvedModel = kudosModel;
      break;
    case SchemaType.Goal:
      resolvedModel = goalModel;
      break;
    default:
      throw new Error("Could not resolve type.");
  }

  return resolvedModel;
}

function convertToObjectId(id: string) {
  return new ObjectId(id);
}
export class MongooseHelper {
  model: any;

  constructor(schemaType: SchemaType) {
    this.model = resolveSchemaType(schemaType);
  }

  query = async (queryType: QueryType, queryBody: any, res: any) => {
    try {
      switch (queryType) {
        case QueryType.Create:
          await this.queryCreate(queryBody, res);
          break;
        case QueryType.Read:
          await this.queryRead(queryBody, res);
          break;
        case QueryType.ReadOne:
          await this.queryReadOne(queryBody, res);
          break;
        case QueryType.Update:
          await this.queryUpdate(queryBody, res);
          break;
        case QueryType.Delete:
          await this.queryDelete(queryBody, res);
          break;
        default:
          throw new Error("Unknown query type");
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  private queryCreate = async (queryBody: any, res: any) => {
    const newEntity = new this.model(queryBody);
    try {
      await newEntity.save();
      res.send(newEntity);
    } catch (err) {
      console.log(err);
      res.status(500).send("Failed to create entity.");
    }
  };

  private queryRead = async (queryBody: any, res: any) => {
    this.model.find(queryBody, (err: Error, entities: any) => {
      if (err) {
        res.status(500).send("Could not reach database.");
      }

      if (entities.length) {
        res.send(entities);
      } else {
        res.status(400).send("Failed to query for one entity.");
      }
    });
  };

  private queryReadOne = async (queryBody: any, res: any) => {
    this.model.findOne(queryBody, (err: Error, entity: any) => {
      if (err) {
        res.status(500).send("Could not reach database.");
      }

      if (entity) {
        res.send(entity);
      } else {
        res.status(400).send("Failed to query for one entity.");
      }
    });
  };

  private queryUpdate = async (queryBody: any, res: any) => {
    const id: ObjectId = convertToObjectId(queryBody.id);
    delete queryBody.id;

    try {
      await this.model.findByIdAndUpdate(id, queryBody);
    } catch (error) {
      res.status(500).send("Failed to update entity.");
    }
    res.send("Successfully updated entity.");
  };

  private queryDelete = async (queryBody: any, res: any) => {
    const id: ObjectId = convertToObjectId(queryBody.id);

    try {
      const entity = await this.model.findByIdAndDelete(id);

      if (!entity) {
        res.status(404).send("No entity found");
      } else {
        res.status(200).send();
      }
    } catch (error) {
      res.status(500).send("Failed to delete entity.");
    }
  };
}
