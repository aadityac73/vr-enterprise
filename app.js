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

var clients= [
  {
    name: "Rare Rabbit",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608131/assets/logos/rare_rabbit_wijkho.png",
    images: [
              "https://res.cloudinary.com/aadityac73/image/upload/v1605512889/assets/images/rr1_obesqn.png",
              "https://res.cloudinary.com/aadityac73/image/upload/v1605512889/assets/images/rr2_xo2oo4.png",
              "https://res.cloudinary.com/aadityac73/image/upload/v1605512889/assets/images/rr3_arj1ux.png"
            ]
  },
  {
    name: "Ujjivan Finance Bank",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608132/assets/logos/bank_logo_srelir.jpg",
  },
  {
    name: "IIFL",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608133/assets/logos/IIFL_wnlf3k.jpg",
    images: []
  },
  {
    name: "Muthoot Finance",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608131/assets/logos/Muthoot_Finance_fchx6t.png",
    images: []
  },
  {
    name: "Huawei",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608134/assets/logos/huawei_b9bfce.png",
    images: []
  },
  {
    name: "Allied Design Associates",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608132/assets/logos/ada_unev1u.jpg",
    images: []
  },
  {
    name: "FIS",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608132/assets/logos/fis_ty5yyc.png",
    images: []
  },
  {
    name: "Korum Mall",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608131/assets/logos/korum_vjqmm0.png",
    images: []
  },
  {
    name: "Kailash Parbat Restaurant",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608133/assets/logos/kailash-parbat_xyxaqy.jpg",
    images: []
  },
  {
    name: "Pernod Ricard",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608131/assets/logos/Pernod-Ricard_edfawl.png",
    images: []
  },
  {
    name: "Royal Stag",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608131/assets/logos/royal-stag_2_hypi1j.jpg",
    images: []
  },
  {
    name: "Blenders Pride",
    logo: "https://res.cloudinary.com/aadityac73/image/upload/v1605608132/assets/logos/bleders_logo_lmngxg.jpg",
    images: []
  },
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

app.get("/clientele", (req, res) => {
  res.render("clientele", {clients: clients});
});

app.listen(3000, () => {
  console.log("Server has started!");
});