import express from "express";

let router = express.Router();

// Login authentication
router.post("/login", (req, res) => {
  res.send("Random Login Token Hash");
  console.log(req.body);
});

export default router;
