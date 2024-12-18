const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_learning', {
            useNewUrlParser: true,        // Use the new URL parser (recommended)
            useUnifiedTopology: true,    // Use the new topology engine
        });
        console.log("Connected successfully to nodejs_learning database");
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

module.exports = { connect }; // plaint object