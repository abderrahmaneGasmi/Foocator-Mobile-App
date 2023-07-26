const mongoose = require("mongoose");
const placeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["restaurant", "hotel", "coffee"],
  },
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
    default: 0,
  },
  ratingnumber: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Place", placeSchema);
