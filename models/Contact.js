const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    facebook: {type: String, required: false },
    instagram: {type: String, required: false },
    twitter: {type: String, required: false },

}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
