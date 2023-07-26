const express = require("express");

const route = express.Router();

const {
  addPlace,
  getPlaces,
  getpopularPlaces,
} = require("../controllers/placecontroller");

route.route("/").post(addPlace);
route.route("/").get(getPlaces);
route.route("/popular/").get(getpopularPlaces);
module.exports = route;
