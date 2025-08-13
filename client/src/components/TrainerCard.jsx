const TrainerCard = ({ trainer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={trainer.image} 
        alt={trainer.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
        <p className="text-orange-500 font-semibold mb-4">{trainer.specialty}</p>
        <p className="text-gray-600">{trainer.bio}</p>
      </div>
    </div>
  );
};

export default TrainerCard;