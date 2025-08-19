const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.createContact);
router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

// @route   POST /api/contacts
// @desc    Create new contact
router.post('/', async (req, res) => {
    try {
      const contact = new Contact(req.body);   // create new contact
      await contact.save();                    // save to MongoDB
      res.status(201).json(contact);           // ✅ send response back
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });  // ✅ send error instead of hanging
    }
  });
  
module.exports = router;
