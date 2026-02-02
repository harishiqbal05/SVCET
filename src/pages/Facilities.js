import React from 'react';
import { Helmet } from 'react-helmet-async';

const Facilities = () => {
  const facilities = [
    {
      name: 'Modern Classrooms',
      icon: '🏫',
      description:
        'Spacious, well-ventilated classrooms equipped with modern teaching aids, projectors, and audio-visual systems for effective learning.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb218ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Advanced Laboratories',
      icon: '🔬',
      description:
        'State-of-the-art laboratories for each department with latest equipment and tools for practical training and research.',
      image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5fGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Central Library',
      icon: '📚',
      description:
        'Comprehensive library with extensive collection of books, journals, e-resources, and digital library facilities for research and learning.',
      image: 'https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeXxlbnwwfHx8fDE3NzAwNDk1MDB8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Hostel Accommodation',
      icon: '🏠',
      description:
        'Separate hostel facilities for boys and girls with comfortable rooms, mess, and recreation areas ensuring a home-like environment.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxob3N0ZWx8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Transportation',
      icon: '🚌',
      description:
        'College buses covering major routes in Tirunelveli district providing safe and convenient transportation for students.',
      image: 'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjYW1wdXN8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Sports Facilities',
      icon: '⚽',
      description:
        'Well-maintained sports grounds, courts, and indoor facilities for cricket, football, basketball, volleyball, and other sports.',
      image: 'https://images.unsplash.com/photo-1705593136686-d5f32b611aa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmYWNpbGl0aWVzfGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Cafeteria',
      icon: '🍽️',
      description:
        'Hygienic cafeteria serving nutritious and delicious food with variety of options for breakfast, lunch, snacks, and beverages.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjYWZldGVyaWF8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Computer Center',
      icon: '💻',
      description:
        'High-speed internet connectivity, modern computers, and software for student access and project work.',
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2V8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
  ];

  const additionalFacilities = [
    { icon: '🏛️', name: 'Seminar Halls', description: 'For workshops and guest lectures' },
    { icon: '👥', name: 'Placement Cell', description: 'Career guidance and placement support' },
    { icon: '💊', name: 'Medical Facility', description: 'First aid and health care services' },
    { icon: '📶', name: 'Wi-Fi Campus', description: 'High-speed internet throughout campus' },
    { icon: '🎨', name: 'Activity Rooms', description: 'For cultural and co-curricular activities' },
    { icon: '🔒', name: 'Security', description: '24/7 campus security and CCTV surveillance' },
  ];

  return (
    <>
      <Helmet>
        <title>Facilities | SVCET - World-Class Infrastructure & Amenities</title>
        <meta
          name="description"
          content="SVCET offers world-class facilities including modern classrooms, advanced laboratories, library, hostel, sports, cafeteria, and more."
        />
        <meta property="og:title" content="Facilities at SVCET" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="facilities-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl text-gray-100">
            World-Class Infrastructure for Comprehensive Learning Experience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white" data-testid="facilities-intro">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">State-of-the-Art Infrastructure</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At SVCET, we believe that excellent infrastructure is essential for quality education.
              Our campus is equipped with modern facilities designed to provide students with the
              best learning environment and support their academic, personal, and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-gray-50" data-testid="main-facilities">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Core Facilities</h2>
            <p className="section-subtitle">
              Comprehensive facilities supporting academic excellence and student life
            </p>
          </div>

          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
                data-testid={`facility-${index}`}
              >
                {/* Image */}
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="text-5xl mr-4">{facility.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{facility.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-white" data-testid="additional-facilities">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Additional Amenities</h2>
            <p className="section-subtitle">
              Supporting infrastructure for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
                data-testid={`additional-facility-${index}`}
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Highlight */}
      <section className="py-16 bg-primary-50" data-testid="library-highlight">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1683319598210-d70486f2f996?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeXxlbnwwfHx8fDE3NzAwNDk1MDB8MA&ixlib=rb-4.1.0&q=85"
                alt="Modern library interior"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Central Library</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our central library is the heart of academic resources, featuring:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Vast Collection:</strong> Over 10,000+ books, journals, and periodicals</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Digital Library:</strong> Access to e-books and online resources</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Reading Halls:</strong> Comfortable and quiet study spaces</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Reference Section:</strong> Specialized resources for research</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Library Management System:</strong> Digital cataloging and easy search</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Highlight */}
      <section className="py-16 bg-white" data-testid="sports-highlight">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sports & Recreation</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe in holistic development. Our sports facilities include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Outdoor:</strong> Cricket, Football, Basketball, Volleyball courts</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Indoor:</strong> Table Tennis, Badminton, Chess, Carrom</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Athletics:</strong> Running track and field events facilities</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Gymnasium:</strong> Modern fitness equipment for physical training</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-primary-700 mr-2 mt-1">✓</span>
                  <span><strong>Coaching:</strong> Professional coaches for various sports</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1759200135568-566eb9ecaa81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmYWNpbGl0aWVzfGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="Sports facilities aerial view"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white" data-testid="facilities-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Campus
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Visit SVCET and explore our world-class facilities firsthand
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block"
            data-testid="schedule-visit-button"
          >
            Schedule a Campus Visit
          </a>
        </div>
      </section>
    </>
  );
};

export default Facilities;
