/* GET 'home' page */
const homepage = function(req, res){
  res.render('feed', { title: 'Home' });
};

/* GET 'login' page */
const loginpage = function(req, res){
  res.render('login', { title: 'Login' });
};

/* GET 'Register' page */
const registerpage = function(req, res){
  res.render('register', { title: 'Register' });
};

module.exports = {
  homepage,
  loginpage,
  registerpage
};
