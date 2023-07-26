const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
exports.connectDb = () => {
  mongoose.connect(process.env.DBSERVER).then(() => {
    console.log("Connected to DB");
  });
};
