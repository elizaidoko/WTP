const mongoose = require('mongoose');
const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
        },
        
    description: String,
    when: String,
    where: String,
    imagelocation: String
    });
    mongoose.model('Event', eventsSchema);