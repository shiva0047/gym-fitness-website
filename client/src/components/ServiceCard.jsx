const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img 
        src={service.image} 
        alt={service.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;