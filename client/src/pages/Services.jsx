import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Strength Training',
      description: 'Build muscle and increase strength with personalized weight training programs designed by our expert trainers.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b'
    },
    {
      id: 2,
      name: 'Cardio Workouts',
      description: 'Improve cardiovascular health with our range of cardio equipment and guided training sessions.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b'
    },
    {
      id: 3,
      name: 'Yoga Classes',
      description: 'Enhance flexibility, balance, and mental clarity with our yoga sessions for all skill levels.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597'
    },
    {
      id: 4,
      name: 'Personal Training',
      description: 'One-on-one sessions with certified trainers to help you achieve your specific fitness goals.',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa'
    },
    {
      id: 5,
      name: 'HIIT Programs',
      description: 'High-intensity interval training to maximize fat burning and improve endurance in short sessions.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438'
    },
    {
      id: 6,
      name: 'Nutrition Counseling',
      description: 'Expert advice on diet and nutrition to complement your fitness routine and optimize results.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061'
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a wide range of fitness programs to help you achieve your goals, no matter your current fitness level.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;