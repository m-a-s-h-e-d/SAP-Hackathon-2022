import express from "express";

let router = express.Router();

// Fetch goals
router.get("/", (req, res) => {
  // Filter by date and time delta
  console.log(`Getting kudos`);
  res.send("Array of kudos objects");
});

// Create goals
router.post("/create", (req, res) => {
  console.log(`Creating for user ${req.body.userid}`);
});

// Update goals
router.post("/update/:kudosid", (req, res) => {
  console.log(`Updating kudos ${req.params.kudosid}`);
});

export default router;
