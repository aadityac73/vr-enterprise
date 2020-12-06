require('dotenv').config();
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
	mongoose = require('mongoose'),
	passport = require('passport'),
  LocalStrategy = require('passport-local'),
  flash = require('connect-flash'),
	User = require('./models/users');
	
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');

const PORT = process.env.PORT || 3000;

const URI = process.env.DATABASEURL || 'mongodb://127.0.0.1:27017/vastu_rachana';
mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

app.use(
	require('express-session')({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
	res.locals.currUser = req.user;
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	next();
});

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);

app.listen(PORT, () => {
  console.log("Server has started!");
});