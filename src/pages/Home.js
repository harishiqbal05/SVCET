import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const highlights = [
    {
      icon: '🎓',
      title: 'Anna University Affiliated',
      description: 'Approved by AICTE and affiliated to Anna University',
    },
    {
      icon: '🏛️',
      title: 'TNEA Code: 4967',
      description: 'Apply through Tamil Nadu Engineering Admissions',
    },
    {
      icon: '👨‍🎓',
      title: '9 Departments',
      description: 'Diverse range of engineering and management programs',
    },
    {
      icon: '🏆',
      title: 'Excellence in Education',
      description: 'Committed to quality education and student success',
    },
  ];

  const featuredDepartments = [
    {
      name: 'Computer Science & Engineering',
      icon: '💻',
      description: 'Programming, software development, and industry readiness',
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2V8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Artificial Intelligence & ML',
      icon: '🤖',
      description: 'Data-driven intelligence and future technologies',
      image: 'https://images.unsplash.com/photo-1581092335203-42374bcf7d89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Electronics & Communication',
      icon: '📡',
      description: 'Electronics, communication systems, and embedded tech',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Mechanical Engineering',
      icon: '⚙️',
      description: 'Core mechanical design and manufacturing',
      image: 'https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
    },
  ];

  return (
    <>
      <Helmet>
        <title>SVCET | Engineering College in Tirunelveli | Anna University Affiliated</title>
        <meta
          name="description"
          content="S.Veerasamy Chettiar College of Engineering and Technology is an Anna University affiliated engineering college offering quality education in Tamil Nadu."
        />
        <meta
          name="keywords"
          content="Engineering college in Tirunelveli, Anna University affiliated college, Best engineering college in Tamil Nadu, SVCET Puliangudi, TNEA counselling code 4967"
        />
        <meta property="og:title" content="SVCET | Engineering College in Tirunelveli" />
        <meta
          property="og:description"
          content="Anna University affiliated engineering college offering quality education in Tamil Nadu"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 md:py-32"
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzcwMDQ5NTAwfDA&ixlib=rb-4.1.0&q=85)',
            opacity: 0.2,
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              S.Veerasamy Chettiar College of Engineering and Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100" data-testid="hero-subtitle">
              Excellence in Engineering Education Since Inception
            </p>
            <p className="text-lg mb-10 text-gray-200">
              Anna University Affiliated | AICTE Approved | TNEA Code: 4967
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="btn-primary inline-block"
                data-testid="apply-now-button"
              >
                Apply via TNEA
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-block"
                data-testid="contact-admission-button"
              >
                Contact Admission Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-16 bg-white" data-testid="about-summary-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About SVCET</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                S.Veerasamy Chettiar College of Engineering and Technology is a premier
                engineering institution in Tirunelveli District, Tamil Nadu. Affiliated to Anna
                University and approved by AICTE, we are committed to providing quality technical
                education and fostering innovation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our college offers a comprehensive range of undergraduate and postgraduate programs
                in engineering, computer applications, and management, preparing students for
                successful careers in their chosen fields.
              </p>
              <Link
                to="/about"
                className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center"
                data-testid="learn-more-link"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1536982679170-1b2277759c92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2xsZWdlJTIwY2FtcHVzfGVufDB8fHx8MTc3MDA0OTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="SVCET Campus Building"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50" data-testid="highlights-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose SVCET?</h2>
            <p className="section-subtitle">
              Committed to academic excellence and holistic development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center"
                data-testid={`highlight-card-${index}`}
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Departments Section */}
      <section className="py-16 bg-white" data-testid="featured-departments-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Departments</h2>
            <p className="section-subtitle">
              Explore our diverse range of engineering programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDepartments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                data-testid={`department-card-${index}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/departments"
              className="btn-primary"
              data-testid="view-all-departments-button"
            >
              View All Departments
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Snapshot */}
      <section className="py-16 bg-primary-50" data-testid="facilities-snapshot-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">World-Class Facilities</h2>
            <p className="section-subtitle">
              State-of-the-art infrastructure for comprehensive learning
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { name: 'Classrooms', icon: '🏫' },
              { name: 'Laboratories', icon: '🔬' },
              { name: 'Library', icon: '📚' },
              { name: 'Hostel', icon: '🏠' },
              { name: 'Transport', icon: '🚌' },
              { name: 'Sports', icon: '⚽' },
              { name: 'Cafeteria', icon: '🍽️' },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow"
                data-testid={`facility-icon-${index}`}
              >
                <div className="text-4xl mb-2">{facility.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{facility.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/facilities"
              className="btn-primary"
              data-testid="explore-facilities-button"
            >
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white" data-testid="cta-section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join SVCET and shape your future in engineering and technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block"
              data-testid="cta-admissions-button"
            >
              View Admission Details
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all inline-block"
              data-testid="cta-contact-button"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
