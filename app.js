require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mailer = require('./misc/mailer');

const data = require('./misc/content');

const {images, services, clients} = data;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services", {services: services});
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", {images: images});
});

app.get("/clientele", (req, res) => {
  res.render("clientele", {clients: clients});
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const {name, email, phone, message} = req.body.contact;
  const html = `<h3>New Message from ${name}</h3>
    ${message}<br/><br/>${name},<br/>${phone},<br/>${email}`;

  mailer.sendEmail('vasturachana007@gmail.com', 'info@vr-enterprise.com', `Enquiry from ${name}`, html);
  console.log("Email sent successfully!");
  res.redirect('/contact');
});

app.listen(PORT, () => {
  console.log("Server has started!");
});