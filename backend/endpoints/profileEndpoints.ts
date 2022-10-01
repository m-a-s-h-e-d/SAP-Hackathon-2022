import express from "express";

let router = express.Router();

// Fetch profile
router.get("/:userid", (req, res) => {
  console.log(`Fetching profile for user ${req.params.userid}`);
  res.send("Profile for requested user");
});

// Invalid fetch, missing user id
router.get("/", (req, res) => {
  res.status(400).send("Request contains no/invalid user id.");
});

export default router;
