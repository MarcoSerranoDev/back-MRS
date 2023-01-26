const { model, Schema } = require("mongoose");

const Product = new Schema({
  id: Number,
  model: String,
  mRef: String,
  category: String,
  usLang: {
    description: String,
    description_small: String,
    features: [String],
  },
  esLang: {
    description: String,
    description_small: String,
    features: [String],
  },
  rutas: [String],
  imgUrlBg: String,
});

module.exports = model("Product", Product);
