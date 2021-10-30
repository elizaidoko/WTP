const mongoose = require('mongoose');
const dbURI = "mongodb+srv://wtpcluster.ssdna.mongodb.net/WTP";
try {
   
    mongoose.connect(
        dbURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
        );
    }
     catch (e) {
      console.log("could not connect");
    }
    require('./feed');
    

