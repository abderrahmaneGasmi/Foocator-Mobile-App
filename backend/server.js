const express = require("express");
const placeRouter = require("./routes/placerouter");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });
const { connectDb } = require("./config/DB");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "images")));
app.use(
  cors({
    origin: "*", // Allow requests from all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization", "auth"], // Allow specified headers
  })
);
connectDb();
app.use("/api/places", placeRouter);
app.listen(1111, () => {});
