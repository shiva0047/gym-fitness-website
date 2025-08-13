import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import TrainerCard from '../components/TrainerCard';

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Shiva',
      role: 'Fitness Enthusiast',
      content: 'FitForce transformed my life! I lost 30 pounds in 3 months with their personalized training program.',
      rating: 5
    },
    {
      id: 2,
      name: 'tarun',
      role: 'Bodybuilder',
      content: 'The best gym in town with top-notch equipment and knowledgeable trainers.',
      rating: 5
    },
    {
      id: 3,
      name: 'adarsh',
      role: 'Yoga Practitioner',
      content: 'Love the variety of classes. The yoga sessions have improved my flexibility tremendously.',
      rating: 4
    }
  ];

  const trainers = [
    {
      id: 1,
      name: 'ankit',
      specialty: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      bio: 'Certified personal trainer with 10+ years of experience in strength and conditioning.'
    },
    {
      id: 2,
      name: 'shivam',
      specialty: 'Cardio & HIIT',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      bio: 'Specializes in high-intensity interval training and endurance programs.'
    },
    {
      id: 3,
      name: 'bhole',
      specialty: 'Yoga & Mobility',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      bio: 'Yoga instructor focused on improving flexibility, mobility, and mindfulness.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
            <p className="text-xl mb-8">Join our community and start your fitness journey today with expert trainers and state-of-the-art facilities.</p>
            <Link to="/membership" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="Strength Training" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Strength Training</h3>
                <p className="text-gray-600">Build muscle and increase strength with our personalized weight training programs.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b" alt="Cardio Blast" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cardio Blast</h3>
                <p className="text-gray-600">Burn calories and improve cardiovascular health with our high-energy cardio sessions.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597" alt="Yoga & Mindfulness" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Yoga & Mindfulness</h3>
                <p className="text-gray-600">Improve flexibility, balance, and mental clarity with our yoga classes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map(trainer => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8">Join FitForce today and get access to all our facilities and classes.</p>
          <Link to="/membership" className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;