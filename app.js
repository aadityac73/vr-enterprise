const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const images = ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
  "https://images.unsplash.com/photo-1595846723416-99a641e1231a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
  "https://images.unsplash.com/photo-1595846936289-91371459c5bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1214&q=80",
  "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
  "https://images.unsplash.com/photo-1482867899247-e295efdd8c1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1600494448644-50b41080adbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  "https://images.unsplash.com/photo-1600493505423-474fea65ad9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
  "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", {images: images});
});

app.listen(3000, () => {
  console.log("Server has started!");
});