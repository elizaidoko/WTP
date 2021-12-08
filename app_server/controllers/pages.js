const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://morning-beyond-35015.herokuapp.com'; 
}

/* GET 'home' page */

const _renderHomepage = function(req, res, responseBody) {
	res.render('feed', { title: 'Wheres the party',
	strapline: 'Upcoming Events',
	events: responseBody
  
  });
  };
  
  const homepage = function(req, res){
	const path = '/api/events'; 
	const requestOptions = { 
	url : apiOptions.server + path, 
	method : 'GET', 
	json : {}, 
	qs : { 
	} 
	}; 
	request(requestOptions, (err, response, body) => { 
	_renderHomepage(req, res, body); 
	} 
	);
	
};

/* GET 'login' page */
const _renderLoginpage = function(req, res){
  res.render('login', { title: 'Login' });
};
const loginpage = function(req, res){
	const path = '/api/login'; 
	const requestOptions = { 
	url : apiOptions.server + path, 
	method : 'POST', 
	json : {}, 
	qs : { 
	} 
	}; 
	request(requestOptions, (err, response, body) => { 
		_renderLoginpage(req, res, body); 
		} 
	
	)};

/* GET 'Register' page */
const _renderRegister = function(req, res, responseBody) {
	res.render('register', { title: 'Register' });
  };
  

const registerPage = function(req, res){
	const path = '/api/register'; 
	const requestOptions = { 
	url : apiOptions.server + path, 
	method : 'POST', 
	json : {}, 
	qs : { 
	} 
	}; 
	request(requestOptions, (err, response, body) => { 
		_renderRegister(req, res, body); 
		} 
	
	)};

module.exports = {
  homepage,
  loginpage,
  registerPage
};
