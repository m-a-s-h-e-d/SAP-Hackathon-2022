// Imports for dependencies
import express from "express";
import cors from "cors";

// Imports for endpoints
import authenticationEndpoints from "./endpoints/authenticationEndpoints.js";
import profileEndpoints from "./endpoints/profileEndpoints.js";
import postsEndpoints from "./endpoints/postsEndpoints.js";
import kudosEndpoints from "./endpoints/kudosEndpoints.js";
import goalsEndpoints from "./endpoints/goalsEndpoints.js";

// Basic web server setup
const app = express();
app.use(express.json());
app.use(cors());

// Authentication endpoints
app.use("/auth", authenticationEndpoints);

// Profile endpoints
app.use("/profile", profileEndpoints);

// Userpost endpoints
app.use("/posts", postsEndpoints);

// Kudos endpoints
app.use("/kudos", kudosEndpoints);

// Personal goals endpoint
app.use("/goals", goalsEndpoints);

app.listen(3000, () => {
  console.log("Started listening on port 3000");
});
