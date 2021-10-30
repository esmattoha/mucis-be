// Import Dependencies
import env from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./user/authRoute.js";

// Configaration
env.config();
const app = express();

// mongo Datbase connection
try {
  (async () => {
   await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected.");
  })();
} catch (error) {
  console.log(error);
}

// Json
app.use(express.json());

app.use(authRouter);

const Port = process.env.PORT || 3000;
app.listen(Port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Your Server is running on port ${Port}`);
});
