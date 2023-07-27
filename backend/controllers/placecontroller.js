const { sendstatus } = require("../helper/helper");
const Place = require("../models/Place");

exports.addPlace = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.type ||
    !req.body.lat ||
    !req.body.lng ||
    !req.body.image ||
    !req.body.address ||
    !req.body.rating ||
    !req.body.ratingnumber
  ) {
    console.log(req.body);
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const place = new Place({
    name: req.body.name,
    type: req.body.type,
    lat: req.body.lat,
    lng: req.body.lng,
    image: req.body.image,
    address: req.body.address,
    rating: req.body.rating,
    ratingnumber: parseInt(req.body.ratingnumber),
  });
  try {
    const savedPlace = await place.save();
    res.json(savedPlace);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getPlaces = async (req, res) => {
  try {
    console.log("get places");
    const places = await Place.find().select(
      "name type lat lng image address rating ratingnumber"
    );
    res.json(places);
  } catch (err) {
    res.json({ message: err });
  }
};
exports.getpopularPlaces = async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;

  try {
    console.log("get places");
    const places = await Place.find()
      .sort({ ratingnumber: -1 })
      .select("name type lat lng image address rating ratingnumber")
      .limit(limit);
    res.json(places);
  } catch (err) {
    res.json({ message: err });
  }
};
exports.searchPlaces = async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.search;
  try {
    console.log("get places");
    const places = await Place.find({
      name: { $regex: search, $options: "i" },
    })
      .sort({ ratingnumber: -1 })
      .select("name type lat lng image address rating ratingnumber")
      .limit(limit);
    res.json(places);
  } catch (err) {
    sendstatus(res, 400, err);
  }
};
