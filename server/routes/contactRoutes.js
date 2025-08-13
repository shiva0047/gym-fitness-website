import express from 'express';
import { 
  submitContact, 
  getContacts  // Make sure this is imported
} from '../controllers/contactController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public route for submitting contacts
router.post('/', submitContact);

// Protected admin route for viewing contacts
router.get('/', protect, authorize('admin'), getContacts);

export default router;