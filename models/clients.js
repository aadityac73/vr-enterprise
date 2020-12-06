const mongoose = require('mongoose');
const {Schema} = mongoose;

const clientSchema = new Schema({
  name: String,
  logo: String,
  imageId: String,
  images: Array
});

module.exports = mongoose.model("Clients", clientSchema)