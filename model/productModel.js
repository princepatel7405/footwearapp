const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    brand: String,
    price: Number,
    image:String,
    category: {
      ref: "category",
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
