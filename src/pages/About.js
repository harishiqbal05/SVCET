import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SVCET - Anna University Affiliated Engineering College</title>
        <meta
          name="description"
          content="Learn about S.Veerasamy Chettiar College of Engineering and Technology, our vision, mission, and commitment to excellence in engineering education."
        />
        <meta property="og:title" content="About SVCET | Engineering College in Tirunelveli" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="about-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SVCET</h1>
          <p className="text-xl text-gray-100">
            Building Tomorrow's Engineers and Innovators
          </p>
        </div>
      </section>

      {/* College Overview */}
      <section className="py-16 bg-white" data-testid="college-overview">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our College</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                S.Veerasamy Chettiar College of Engineering and Technology (SVCET) is a premier
                engineering institution located in Puliangudi, Tirunelveli District, Tamil Nadu.
                Established with a vision to provide world-class technical education, we have
                consistently delivered excellence in engineering and technology education.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Affiliated to Anna University and approved by AICTE, SVCET offers a comprehensive
                range of undergraduate and postgraduate programs designed to meet the evolving
                needs of the industry and society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our college is committed to nurturing talent, fostering innovation, and developing
                professionals who can contribute meaningfully to society and the global economy.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1684560207649-a2e137107e44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjb2xsZWdlJTIwY2FtcHVzfGVufDB8fHx8MTc3MDA0OTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="Modern SVCET Campus"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50" data-testid="vision-mission">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">👁️</div>
                <h2 className="text-3xl font-bold text-primary-700">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a center of excellence in engineering and technology education, fostering
                innovation, research, and holistic development to create globally competitive
                professionals who contribute to societal advancement and sustainable development.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">🎯</div>
                <h2 className="text-3xl font-bold text-primary-700">Our Mission</h2>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Provide quality technical education with strong theoretical and practical foundation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Foster research, innovation, and entrepreneurship among students and faculty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Develop ethical, socially responsible professionals with leadership qualities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Establish strong industry-academia partnerships for real-world exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>Create an inclusive learning environment that promotes lifelong learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation & Recognition */}
      <section className="py-16 bg-white" data-testid="affiliation-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Affiliation & Recognition</h2>
            <p className="section-subtitle">
              Accredited and recognized by premier educational bodies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anna University</h3>
              <p className="text-gray-600">
                Affiliated to Anna University, one of India's premier technical universities
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AICTE Approved</h3>
              <p className="text-gray-600">
                Approved by All India Council for Technical Education (AICTE)
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TNEA Code: 4967</h3>
              <p className="text-gray-600">
                Recognized by Tamil Nadu Engineering Admissions (TNEA)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SVCET */}
      <section className="py-16 bg-primary-50" data-testid="why-choose-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose SVCET?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '👨‍🏫',
                title: 'Experienced Faculty',
                description: 'Learn from qualified and experienced faculty members dedicated to student success',
              },
              {
                icon: '🔬',
                title: 'Modern Infrastructure',
                description: 'State-of-the-art laboratories, classrooms, and learning facilities',
              },
              {
                icon: '💼',
                title: 'Industry Connections',
                description: 'Strong industry partnerships for internships and placement opportunities',
              },
              {
                icon: '📚',
                title: 'Comprehensive Library',
                description: 'Extensive collection of books, journals, and digital resources',
              },
              {
                icon: '🏆',
                title: 'Holistic Development',
                description: 'Focus on overall personality development through co-curricular activities',
              },
              {
                icon: '🌍',
                title: 'Research Focus',
                description: 'Encouraging research and innovation among students and faculty',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 bg-white" data-testid="campus-life">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Campus Life at SVCET</h2>
            <p className="section-subtitle">
              A vibrant community fostering growth, learning, and collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="Students collaborating"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Learning</h3>
                <p className="text-gray-600">Students working together on projects and assignments</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjYW1wdXN8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85"
                alt="Campus life"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vibrant Campus</h3>
                <p className="text-gray-600">Green spaces and modern infrastructure for student activities</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9ufGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="Graduation celebration"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories</h3>
                <p className="text-gray-600">Celebrating achievements and milestones together</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
