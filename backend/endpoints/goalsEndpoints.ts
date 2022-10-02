import express from "express";
import { MongooseHelper } from "../databaseHelpers/mongooseHelper";
import { QueryType } from "../enums/queryType";
import { SchemaType } from "../enums/schemaType";

let router = express.Router();
const queryHelper = new MongooseHelper(SchemaType.Goal);

// Fetch goals
router.get("/", async (req, res) => {
  let requestBody = {
    userid: req.body.userid,
  };

  await queryHelper.query(QueryType.Read, requestBody, res);
});

// Create goals
router.post("/create", async (req, res) => {
  let requestBody = {
    userid: req.body.userid,
    content: req.body.content,
  };

  await queryHelper.query(QueryType.Create, requestBody, res);
});

// Update goals
router.patch("/:goalid", async (req, res) => {
  let requestBody = {
    id: req.params.goalid,
    content: req.body.content,
    completed: req.body.completed,
  };

  await queryHelper.query(QueryType.Update, requestBody, res);
});

export default router;
