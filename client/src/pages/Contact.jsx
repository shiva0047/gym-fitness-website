import { useState } from 'react';
import api from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitted: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, error: '' });

    try {
      const response = await api.post('/contact', formData);
      if (response.data.success) {
        setStatus({ submitted: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitted: false,
        error: err.response?.data?.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {status.submitted ? (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status.error && (
            <div className="p-4 mb-4 text-red-700 bg-red-100 rounded">
              {status.error}
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={status.submitted}
          >
            {status.submitted ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;