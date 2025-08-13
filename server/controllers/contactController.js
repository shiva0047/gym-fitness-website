import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

// Submit contact form (public)
export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

     // Debug log to verify received data
    console.log("Received form data:", { name, email, message });

    // Save to database
    const contact = await Contact.create({ name, email, message });

    // Send email notification
      await sendEmail({
      name: name || 'Not provided',
      email: email || 'Not provided',
      message: message || 'No message'
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all contacts (admin only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};