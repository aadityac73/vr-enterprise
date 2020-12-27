const express = require('express'),
      router  = express.Router(),
      flash = require('connect-flash'),
      mailer = require('../misc/mailer'),
      Portfolio = require('../models/images'),
      Client = require('../models/clients');

const data = require('../misc/content');
const {images, services, clients} = data;

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/services", (req, res) => {
  res.render("services", {services: services});
});

router.get("/portfolio", async (req, res) => {
  try {
    const myImages = await Portfolio.find({});
    if(!myImages) {
      req.flash('error', 'Not found any images in portfolio!');
      return res.redirect('back');
    }
    return res.render("portfolio", {images: images});
  } catch(error) {
    req.flash('error', error.message);
    return res.redirect('back');
  }
});

router.get("/clientele", async (req, res) => {
  try {
    const myClients = await Client.find({});
    if(!myClients) {
      req.flash('error', 'Not found any clients in clientele!');
      return res.redirect('back');
    }
    return res.render("clientele", {clients: clients});
  } catch(error) {
    req.flash('error', error.message);
    return res.redirect('back');
  }
});

router.route("/contact")
  .get((req, res) => {
    res.render("contact");
  })
  .post((req, res) => {
  const {name, email, phone, message} = req.body.contact;
  const html = `<h3>New Message from ${name}</h3>
    ${message}<br/><br/>${name},<br/>${phone},<br/>${email}`;

  mailer.sendEmail('vasturachana007@gmail.com', 'info@vr-enterprise.com', `Enquiry from ${name}`, html);
  console.log("Email sent successfully!");
  res.redirect('/contact');
  });

module.exports = router;

