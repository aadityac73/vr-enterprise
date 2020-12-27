const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      User = require('../models/users'),
      Portfolio = require('../models/images'),
      Client = require('../models/clients'),
      randomString = require('randomstring'),
      mailer = require('../misc/mailer'),
      middleware = require('../middleware/index'),
      upload = require('../config/multer'),
	    cloudinary = require('../config/cloudinary');

const { isLoggedIn, isNotAuthenticated, isVerified } = middleware;

const URL = process.env.URL || 'http://localhost:3000/verify';

router.route('/register')
  .get(isNotAuthenticated, (req, res) => {
    res.render('admin/register');
  })
  .post(isNotAuthenticated, async (req, res) => {
    try{
      const user = await User.findOne({username: req.body.username});
      if(user) {
        req.flash('error', 'Email already in use!');
        return res.redirect('back');
      }
      const newUser = await User.register(new User({username: req.body.username}), req.body.password);
      const secretToken = randomString.generate(6);
      newUser.secretToken = secretToken;
      await newUser.save();
  
      const html = `Please verify you account by enterring following OTP <br/> 
                    <h2>${secretToken}</h2> <br/> On following URL <br/>
                    <a href='${URL}'>${URL}</a>`;
  
      await mailer.sendEmail('vasturachana007@gmail.com', 'info@vr-enterprise.com', `Please verify your account!`, html);
      req.flash('success', 'Please check your email!');
      return res.redirect('back');
    }
    catch(error) {
      req.flash('error', error.message);
      console.log(error);
      res.redirect('back');
    }
  });

router.route('/')
  .get(isNotAuthenticated, (req, res) => {
    res.render("admin/index");
  })
  .post(passport.authenticate('local', {
    failureRedirect: 'back',
    failureFlash: 'Invalid, Username or Password'
  }), isVerified, (req, res) => {
    res.redirect('/admin/portfolio');
  });

router.route('/portfolio')
  .get(isLoggedIn, (req, res) => {
    res.render('admin/portfolio')
  })
  .post(isLoggedIn, upload.single('image'), (req, res) => {
    cloudinary.v2.uploader.upload(
      req.file.path,
      {
        gravity: 'center',
        crop: 'scale'
      },
      (err, result) => {
        if (err) {
          req.flash('error', 'Image upload failed!');
          res.redirect('back');
        } else {
          req.body.image = result.secure_url;
          req.body.imageId = result.public_id;
          const image = {
            caption: req.body.caption,
            image: req.body.image,
            imageId: req.body.imageId
          };
          Portfolio.create(image, (err) => {
            if (err) {
              req.flash('error', 'Image not added!');
              res.redirect('back');
            } else {
              req.flash('success', 'Image Added Successfully to Portfolio!');
              res.redirect('back');
            }
          });
        }
      },
      {
        moderation: 'webpurify'
      }
    );
  })

router.route('/client')
  .get(isLoggedIn, (req, res) => {
    res.render('admin/clients')
  })
  .post(isLoggedIn, upload.single('logo'), (req, res) => {
    cloudinary.v2.uploader.upload(
      req.file.path,
      {
        gravity: 'center',
        crop: 'scale'
      },
      (err, result) => {
        if (err) {
          req.flash('error', 'Image upload failed!');
          res.redirect('back');
        } else {
          req.body.logo = result.secure_url;
          req.body.imageId = result.public_id;
          const images = req.body.images.split(', ');
          const client = {  
            name: req.body.name,
            logo: req.body.logo,
            imageId: req.body.imageId,
            images: images
          };
          Client.create(client, (err) => {
            if (err) {
              req.flash('error', 'Image not added!');
              res.redirect('back');
            } else {
              req.flash('success', 'New Client added to Clientele');
              res.redirect('back');
            }
          });
        }
      },
      {
        moderation: 'webpurify'
      }
    );
  })

router.route('/verify')
  .get((req, res) => {
    res.render('admin/verify')
  })
  .post(async (req, res) => {
    try {
      const user = await User.findOne({secretToken: req.body.secretToken});
      if(!user) {
        req.flash('error', 'No user found!');
        return res.redirect('back')
      }
      if(user.secretToken === req.body.secretToken) {
        user.verified = true;
        user.secretToken = "";
        await user.save();
        req.flash('success', 'Account Verified Successfully!');
        return res.redirect('/admin');
      }
    } catch(error) {
      req.flash('error', error.message)
      res.redirect('back');
    }
  });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/admin');
});

module.exports = router;