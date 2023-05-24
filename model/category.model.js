const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: String,
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CategoryModel=mongoose.model("category",categorySchema)
module.exports ={
    CategoryModel
}