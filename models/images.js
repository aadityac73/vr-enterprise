const mongoose = require('mongoose');
const {Schema} = mongoose;

const imageSchema = new Schema({
  image: String,
  imageId: String,
  caption: String
});

module.exports = mongoose.model("Images", imageSchema);