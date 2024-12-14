const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Student = new Schema({
    id: ObjectId,
    name: String,
    age: Number,
    major: String,
});

module.exports = mongoose.model("Student", Student);