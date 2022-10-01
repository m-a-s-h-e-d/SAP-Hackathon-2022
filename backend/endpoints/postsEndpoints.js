import express from "express";

let router = express.Router();

// Fetch goals
router.get("/", (req, res) => {
  // Filter by date and time delta
  console.log(`Getting posts`);
  res.send("Array of post objects");
});

// Create goals
router.post("/create", (req, res) => {
  console.log(`Creating for user ${req.body.userid}`);
});

// Update goals
router.post("/update/:postid", (req, res) => {
  console.log(`Updating post ${req.params.postid}`);
});

export default router;
