// Imports for dependencies
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Imports for endpoints
import authenticationEndpoints from "./endpoints/authenticationEndpoints";
import profileEndpoints from "./endpoints/profileEndpoints";
import postsEndpoints from "./endpoints/postsEndpoints";
import kudosEndpoints from "./endpoints/kudosEndpoints";
import goalsEndpoints from "./endpoints/goalsEndpoints";

// Basic web server setup
let app = express();
app.use(express.json());
app.use(cors());

// Database connection setup
mongoose.connect(
  "mongodb+srv://ethos-admin:saphackathon2022@ethos.sfpyfac.mongodb.net/ethosDatabase?retryWrites=true&w=majority"
);

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

app.listen(5500, () => {
  console.log("Started listening on port 5500");
});
