const mongoose = require('mongoose');
const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
        
    description: String,
    when: String,
    where: String,
    imagelocation: String
    });
    mongoose.model('events', eventsSchema);