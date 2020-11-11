const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server has started!");
});