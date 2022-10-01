import express from "express";

let router = express.Router();

// Fetch goals
router.get("/", (req, res) => {
  console.log(`Getting goals`);
  res.send("Array of goal objects");
});

// Create goals
router.post("/create", (req, res) => {
  console.log(`Creating goals for user ${req.body.userid}`);
});

// Update goals
router.post("/update/:goalid", (req, res) => {
  console.log(
    `Updating goals for user ${req.body.userid} on goal ${req.params.goalid}`
  );
});

export default router;
