const middleware = {};

middleware.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You must login first!');
  return res.redirect('/admin');
}

middleware.isNotAuthenticated = (req, res, next) => {
  if(!req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You are already logged In!');
  return res.redirect('/admin/portfolio');
}

middleware.isVerified = (req, res, next) => {
  if(req.user.verified) {
    return next();
  }
  req.flash('error', 'You need to verify your account first!');
  req.logout();
  return res.redirect('/admin/verify');
}

module.exports = middleware;