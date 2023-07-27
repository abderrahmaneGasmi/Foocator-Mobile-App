const express = require("express");

const route = express.Router();

const {
  addPlace,
  getPlaces,
  getpopularPlaces,
  searchPlaces,
} = require("../controllers/placecontroller");

route.route("/").post(addPlace);
route.route("/").get(getPlaces);
route.route("/popular/").get(getpopularPlaces);
route.route("/search/").get(searchPlaces);
module.exports = route;
