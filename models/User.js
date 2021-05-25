const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have a name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Must have a name'],
        unique: [true, 'email must be unique'],
        trim: true
    },
    date: {
        type: Date,
        default:Date.now(),
    },

})
const User = mongoose.model('User', UserSchema)
module.exports = User