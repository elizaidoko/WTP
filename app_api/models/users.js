const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
        
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    });

    usersSchema.methods.comparePassword = function(password) {
        return bcrypt.compareSync(password, this.hash_password);
      };

    mongoose.model('User', usersSchema);