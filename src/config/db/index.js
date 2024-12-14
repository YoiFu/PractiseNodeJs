const mongoose = require('mongoose');

async function connect() {
    try {
        var dbConnection = await mongoose.createConnection('mongodb://localhost:27017/nodejs_learning');
        console.log("Connect successfully");
    } catch(error) {
        console.log("Connect failed: ", error);
    }
}

module.exports = { connect }; // plaint object