import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const highlights = [
    {
      icon: '🎓',
      title: 'Founded in 2001',
      description: 'Established by Dr. Murugiah D.Litt in memory of Thiru. S.Veerasamy Chettiar',
    },
    {
      icon: '🏛️',
      title: 'Anna University Affiliated',
      description: 'Approved by AICTE and affiliated to Anna University',
    },
    {
      icon: '📋',
      title: 'TNEA Code: 4967',
      description: 'Apply through Tamil Nadu Engineering Admissions',
    },
    {
      icon: '🏗️',
      title: '80 Acre Campus',
      description: 'Spacious campus with modern infrastructure and facilities',
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
      name: 'Information Technology',
      icon: '💾',
      description: 'Software engineering, database systems, and IT infrastructure management',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
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
        className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 md:py-32 overflow-hidden"
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: 'url(https://svccollege.ac.in/images/slider-images/header-slide.png)',
            opacity: 0.25,
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="relative inline-block perspective-1000">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white relative z-10" data-testid="hero-title">
                <div className="relative inline-block transform-gpu preserve-3d animate-3d-glossy">
                  <span className="relative block">
                    S.Veerasamy Chettiar College
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-glossy-shine transform-gpu"></span>
                    <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-60"></span>
                  </span>
                  <br className="hidden" />
                  <span className="relative block">
                    of Engineering and Technology
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-glossy-shine transform-gpu animation-delay-1500"></span>
                    <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-60"></span>
                  </span>
                </div>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-primary-400/30 blur-2xl animate-pulse-slow transform-gpu"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent animate-3d-rotate transform-gpu"></div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light tracking-wide" data-testid="hero-subtitle">
              Excellence in Engineering Education Since Inception
            </p>
            <p className="text-lg mb-10 text-gray-200">
              Anna University Affiliated | AICTE Approved | TNEA Code: 4967
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out shadow-xl hover:shadow-2xl inline-block"
                data-testid="apply-now-button"
              >
                Apply via TNEA
              </Link>
              <Link
                to="/contact"
                className="bg-white/95 backdrop-blur-md text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-300 ease-out shadow-xl hover:shadow-2xl inline-block"
                data-testid="contact-admission-button"
              >
                Contact Admission Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50" data-testid="about-summary-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="section-title">About SVCET</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded in 2001 by philanthropist Dr. Murugiah D.Litt in memory of his father Thiru. S.Veerasamy Chettiar, SVCET is part of the S.Veerasamy Chettiar Educational and Charitable Trust established in 1997. We are committed to shaping every student into a worthy citizen with quality education and career opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Located on an 80-acre campus on the Puliangudi - Sankarankovil road in Tirunelveli District, our institute provides professional education to rural youth, contributing to nation-building and enabling students to achieve excellence in their pursuits.
              </p>
              <Link
                to="/about"
                className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center group transition-all duration-300 ease-out"
                data-testid="learn-more-link"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out"
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
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://svccollege.ac.in/images/slider-images/header-slide.png"
                alt="SVCET Campus Building"
                className="w-full h-96 object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50" data-testid="highlights-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose SVCET?</h2>
            <p className="section-subtitle">
              Committed to academic excellence and holistic development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out text-center border border-white/20 group"
                data-testid={`highlight-card-${index}`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 ease-out">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Departments Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50" data-testid="featured-departments-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Departments</h2>
            <p className="section-subtitle">
              Explore our diverse range of engineering programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDepartments.map((dept, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-white/20 group"
                data-testid={`department-card-${index}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ease-out">{dept.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">{dept.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/departments"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-xl inline-flex items-center group"
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
