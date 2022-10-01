import express from "express";

let router = express.Router();

// Fetch posts
router.get("/", (req, res) => {
  // Filter by date and time delta
  console.log(`Getting posts`);
  res.send("Array of post objects");
});

// Create post
router.post("/create", (req, res) => {
  console.log(`Creating for user ${req.body.userid}`);
  res.send("Created post");
});

// Update post
router.post("/update/:postid", (req, res) => {
  console.log(`Updating post ${req.params.postid}`);
  res.send("Updated post");
});

export default router;
