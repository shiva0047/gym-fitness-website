import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">FitForce</h3>
            <p className="text-gray-400">Your journey to fitness starts here. We provide the best equipment and trainers to help you achieve your goals.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-orange-500 transition">Services</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-orange-500 transition">Membership</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street</li>
              <li>Uttam Nagar, Delhi</li>
              <li>Phone: +91 798249641</li>
              <li>Email: info@fitforce.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 6am - 10pm</li>
              <li>Saturday: 8am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitForce Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;