import express from "express";
import { MongooseHelper } from "../databaseHelpers/mongooseHelper";
import { QueryType } from "../enums/queryType";
import { SchemaType } from "../enums/schemaType";

let router = express.Router();
const queryHelper = new MongooseHelper(SchemaType.User);

// Login authentication
router.post("/login", async (req, res) => {
  let requestBody = {
    username: req.body.username,
    password: req.body.password,
  };

  await queryHelper.query(QueryType.ReadOne, requestBody, res);
});

// Create new user
router.post("/create", async (req, res) => {
  let requestBody = {
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
  };

  await queryHelper.query(QueryType.Create, requestBody, res);
});

export default router;
