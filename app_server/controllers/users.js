const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://morning-beyond-35015.herokuapp.com'; 
}

/* GET 'login' page */
const loginpage = function(req, res){
    res.render('login', { title: 'Login' });
  };
  

/* GET 'Register' page */
  
const registerPage = function(req, res){
      const path = '/api/register'; 
      const requestOptions = { 
      url : apiOptions.server + path, 
      method : 'POST', 
      json : {}, 
      qs : { 
      } 
      }; 
      
  };

  module.exports = {
    loginpage,
    registerPage
  };
  