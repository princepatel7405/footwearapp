require("dotenv").config();
const mongoose = require("mongoose");
const MongoUrl=process.env.MONGO_URL;
const connection = mongoose.connect(MongoUrl);

module.exports = {
  connection,
};
