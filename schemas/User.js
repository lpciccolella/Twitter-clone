const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    latName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("user", UserSchema);