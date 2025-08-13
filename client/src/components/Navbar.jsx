import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/auth.jsx';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            FitForce
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
            <Link to="/services" className="hover:text-orange-500 transition">Services</Link>
            <Link to="/membership" className="hover:text-orange-500 transition">Membership</Link>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="hover:text-orange-500 transition">Dashboard</Link>
                <button 
                  onClick={logout}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;