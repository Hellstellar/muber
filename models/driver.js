const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    driving: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('driver', DriverSchema);