import express from "express";
import { MongooseHelper } from "../databaseHelpers/mongooseHelper";
import { QueryType } from "../enums/queryType";
import { SchemaType } from "../enums/schemaType";

let router = express.Router();
const queryHelper = new MongooseHelper(SchemaType.Kudos);

// Fetch kudos
router.get("/", async (req, res) => {
  let requestBody = req.body;
  // Filter by date and time delta
  // Any extra filtering and stuff can be done here for the request body

  // Find with $gt

  await queryHelper.query(QueryType.Read, requestBody, res);
});

// Create kudos
router.post("/create", async (req, res) => {
  let requestBody = {
    authorid: req.body.authorid,
    recipientid: req.body.recipientid,
    authorname: req.body.authorname,
    recipientname: req.body.recipientname,
    content: req.body.content,
  };

  await queryHelper.query(QueryType.Create, requestBody, res);
});

// Update kudos
router.patch("/:kudosid", async (req, res) => {
  let requestBody = {
    id: req.params.kudosid,
    content: req.body.content,
    updatedAt: new Date(),
  };

  await queryHelper.query(QueryType.Update, requestBody, res);
});

export default router;
