import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';
import CartModal from '../components/CartModal';

const Membership = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 1999,
      period: 'month',
      features: [
        'Access to cardio area',
        'Access to weight room',
        'Locker room access',
        'Free WiFi',
        '1 free guest pass per month'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Standard',
      price: 3499,
      period: 'month',
      features: [
        'All Basic benefits',
        'Unlimited group classes',
        'Sauna access',
        '2 free guest passes per month',
        '10% discount on supplements'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      price: 5499,
      period: 'month',
      features: [
        'All Standard benefits',
        '24/7 access',
        'Free towel service',
        '4 free guest passes per month',
        '1 free personal training session per month',
        '20% discount on supplements'
      ],
      popular: false
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const addToCart = (plan) => {
    setCart([...cart, plan]);
    setShowModal(true);
  };

  const removeFromCart = (planId) => {
    setCart(cart.filter(item => item.id !== planId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Membership Plans</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your fitness plan with transparent pricing in Indian Rupees
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <PlanCard 
              key={plan.id} 
              plan={{
                ...plan,
                displayPrice: formatPrice(plan.price),
                features: [...plan.features, 'GST included']
              }}
              onAddToCart={() => addToCart(plan)}
            />
          ))}
        </div>
        
        {/* Cart Floating Button */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cart.length} Item(s) | {formatPrice(calculateTotal())}
            </button>
          </div>
        )}

        {/* Consultation Section */}
         <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Personal Guidance?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our fitness experts will help you choose the perfect plan.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

        {/* Terms */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* All prices include GST. 7-day money back guarantee.</p>
        </div>

        {/* Cart Modal */}
        {showModal && (
          <CartModal 
            cart={cart}
            total={calculateTotal()}
            formatPrice={formatPrice}
            onClose={() => setShowModal(false)}
            onRemove={removeFromCart}
            onCheckout={() => {
              // Implement your checkout logic here
              alert('Redirecting to payment gateway...');
              setShowModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Membership;