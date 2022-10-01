import express from "express";

let router = express.Router();

// Login authentication
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Random Login Token Hash");
});

export default router;
