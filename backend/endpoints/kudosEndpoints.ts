import express from "express";

let router = express.Router();

// Fetch goals
router.get("/", (req, res) => {
  // Filter by date and time delta
  console.log(`Getting kudos`);
  res.send("Array of kudos objects");
});

// Create kudos
router.post("/create", (req, res) => {
  console.log(
    `Creating kudos for user ${req.body.userid} to ${req.body.recipientid}`
  );
  res.send("Created kudos");
});

// Update kudos
router.post("/update/:kudosid", (req, res) => {
  console.log(`Updating kudos ${req.params.kudosid}`);
  res.send("Update kudos");
});

export default router;
