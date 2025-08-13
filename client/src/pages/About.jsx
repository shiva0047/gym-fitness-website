const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">About FitForce</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f" alt="Gym Interior" className="rounded-lg shadow-xl w-full" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, FitForce began as a small fitness center with a big vision: to create a community where everyone feels welcome and supported in their fitness journey.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a single location has grown into one of the most respected fitness centers in the region, thanks to our dedicated team and amazing members.
              </p>
              <p className="text-gray-700">
                Today, we continue to innovate and expand our offerings to help our members achieve their health and fitness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            To empower individuals to lead healthier lives by providing exceptional fitness facilities, expert guidance, and a supportive community that inspires and motivates.
          </p>
        </section>

        {/* Facilities Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1" alt="Weight Room" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weight Training Area</h3>
                <p className="text-gray-600">State-of-the-art equipment from top brands for all your strength training needs.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="Cardio Area" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cardio Zone</h3>
                <p className="text-gray-600">The latest treadmills, ellipticals, and bikes with entertainment systems.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597" alt="Group Classes" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Group Exercise Studio</h3>
                <p className="text-gray-600">Spacious studio for yoga, pilates, HIIT, and other group classes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;