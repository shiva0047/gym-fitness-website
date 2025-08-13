const PlanCard = ({ plan, onAddToCart }) => {
  return (
    <div className={`relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
      plan.popular ? 'border-2 border-orange-500' : 'border border-gray-200'
    }`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <div className="bg-white p-6 h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold">{plan.displayPrice}</span>
            <span className="text-gray-600">/{plan.period}</span>
          </div>
          
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={onAddToCart}
          className={`w-full py-3 px-4 rounded-lg font-bold transition ${
            plan.popular 
              ? 'bg-orange-500 hover:bg-orange-600 text-white' 
              : 'bg-gray-800 hover:bg-gray-900 text-white'
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlanCard;