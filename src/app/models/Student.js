const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    name: String,
    age: Number,
    major: String,
});

module.exports = mongoose.model("Student", Student);