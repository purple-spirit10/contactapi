const Contact = require('../models/Contact');

// Create a new contact
exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single contact
exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a contact
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.status(200).json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
