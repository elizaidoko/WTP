const mongoose = require('mongoose');
const User = mongoose.model('User');

//creates a user
//needs username, password, email

const CreateUser = function (req, res) {
    User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
      
    }, (err, user) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(user);
      }
    });
  };
    
//checks if login is is correct
const checkPassword = function (req, res){
    if(!req || !req.query) return respond({error:"no parameters"},res,401);
    else {
        return User.findOne({"username": req.query.username}, 'password')
            .then((value) => {
                const result = {valid: (value.password === req.query.password)};
                respond(result,res,200);
            });
    }

}
//creates data to send back once complete
function respond(content,res,status){
    res.status(status).json(content);
}



  const signIn = function (req, res) {
    if (req.params && req.params.username && req.params.password) {
      User
        .findById(req.params.username)
        .exec((err, user) => {
          if (!user) {
            res	
              .status(404) 
              .json({	
                "message": "user not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          if (user.password == req.params.password) {
            const password = user.password;
            if (!password) {
              res
                .status(404)
                .json({
                  "message": "password not found"
              });
            } else {
              response = {
                username : user.username,
                pasword : user.password
              };
              res
                .status(200)
                .json(response);
            }
          } else {
            res
              .status(404)
              .json({
                "message": "No reviews found"
            });
          } 
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "Not found, username and password are both required"
        });		
    }
  };
  

module.exports = {
    CreateUser,
    signIn,
    checkPassword
}