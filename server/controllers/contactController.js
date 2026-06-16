import mongoose from 'mongoose';
import ContactMessage from '../models/ContactMessage.js';

export const createContactMessage = async (req, res) => {
  const { name, email, message } = req.body;
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.'
    });
  }

  if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  if (trimmedMessage.length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Message should be at least 10 characters long.'
    });
  }

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: 'Database is unavailable. Please start MongoDB and try again.'
    });
  }

  try {
    const contactMessage = await ContactMessage.create({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage
    });

    return res.status(201).json({
      success: true,
      message: 'Message received successfully.',
      data: {
        id: contactMessage._id,
        name: contactMessage.name,
        email: contactMessage.email,
        createdAt: contactMessage.createdAt
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to save your message.'
    });
  }
};
