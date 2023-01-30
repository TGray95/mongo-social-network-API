const mongoose = require('mongoose');
const Thought = require('./Thought')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trimmed: true},
    email: {type: String, required: true, unique: true, },
    thoughts: [Thought.schema],
    friends: [this]
})

const User = mongoose.model('User', userSchema)

module.exports = User;