const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    mongoose.set('strictQuery', false);
    console.log(`mongodb connected`);
    return mongoose.connect('mongodb://127.0.0.1:27017/nike-clone');
};

