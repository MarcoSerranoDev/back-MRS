const { model, Schema } = require("mongoose");

const Product = new Schema({
  id: Number,
  modelo: String,
  top: { type: Boolean, default: false },
  mRef: String,
  category: String,
  usLang: {
    description: String,
    description__small: String,
    features: [String],
  },
  esLang: {
    description: String,
    description__small: String,
    features: [String],
  },
  rutas: [String],
  imgUrlBg: String,
});

module.exports = model("Product", Product);
