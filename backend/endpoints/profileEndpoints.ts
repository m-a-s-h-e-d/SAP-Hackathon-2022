import express from "express";
import { MongooseHelper } from "../databaseHelpers/mongooseHelper";
import { QueryType } from "../enums/queryType";
import { SchemaType } from "../enums/schemaType";

let router = express.Router();
const queryHelper = new MongooseHelper(SchemaType.Profile);

// Fetch profile
router.get("/:userid", async (req, res) => {
  let requestBody = {
    userid: req.params.userid,
  };

  await queryHelper.query(QueryType.ReadOne, requestBody, res);
});

// Create profile
router.post("/:userid", async (req, res) => {
  let requestBody = {
    userid: req.params.userid,
    location: req.body.location,
  };

  await queryHelper.query(QueryType.Create, requestBody, res);
});

// Update profile
router.patch("/:userid", async (req, res) => {
  let requestBody = {
    id: req.params.userid,
    picture: req.body.picture,
    location: req.body.location,
  };

  await queryHelper.query(QueryType.Update, requestBody, res);
});

// Invalid fetch, missing user id
router.get("/", (req, res) => {
  res.status(400).send("Request contains no/invalid user id.");
});

export default router;
