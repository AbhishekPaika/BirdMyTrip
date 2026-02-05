const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String,
    image: String,
  },
  about: {
    title: String,
    description: String,
  },
  offers: [
    {
      title: String,
      description: String,
    },
  ],
});

module.exports = mongoose.model("Content", ContentSchema);