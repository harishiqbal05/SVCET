import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    {
      name: 'Computer Science & Engineering',
      code: 'CSE',
      icon: '💻',
      description:
        'Focus on programming, software development, algorithms, data structures, and preparing industry-ready software engineers with strong problem-solving skills.',
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2V8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Software Development', 'Data Structures', 'Web Technologies', 'Database Management'],
    },
    {
      name: 'Electronics & Communication Engineering',
      code: 'ECE',
      icon: '📡',
      description:
        'Emphasis on electronics, communication systems, embedded technology, signal processing, and modern telecommunication systems.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Communication Systems', 'VLSI Design', 'Embedded Systems', 'Signal Processing'],
    },
    {
      name: 'Mechanical Engineering',
      code: 'MECH',
      icon: '⚙️',
      description:
        'Core mechanical design, manufacturing, thermodynamics, and industrial applications. Preparing engineers for diverse manufacturing sectors.',
      image: 'https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Thermodynamics', 'Manufacturing', 'Machine Design', 'CAD/CAM'],
    },
    {
      name: 'Civil Engineering',
      code: 'CIVIL',
      icon: '🏗️',
      description:
        'Infrastructure development, construction technology, and sustainable engineering practices. Focus on building design, transportation, and environmental engineering.',
      image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5fGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85',
      highlights: ['Structural Engineering', 'Construction Management', 'Geotechnical Engineering', 'Transportation'],
    },
    {
      name: 'Electrical & Electronics Engineering',
      code: 'EEE',
      icon: '⚡',
      description:
        'Power systems, electrical machines, automation, control systems, and renewable energy technologies for sustainable future.',
      image: 'https://images.unsplash.com/photo-1580894906475-403276d3942d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Power Systems', 'Control Systems', 'Renewable Energy', 'Electrical Machines'],
    },
    {
      name: 'Artificial Intelligence & Machine Learning',
      code: 'AI/ML',
      icon: '🤖',
      description:
        'Data-driven intelligence, machine learning algorithms, deep learning, natural language processing, and cutting-edge AI technologies.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85',
      highlights: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Data Science'],
    },
    {
      name: 'Information Technology',
      code: 'IT',
      icon: '💾',
      description:
        'Software engineering, database systems, network security, and IT infrastructure management. Preparing IT professionals for the digital age.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Software Engineering', 'Database Systems', 'Network Security', 'Cloud Computing'],
    },
    {
      name: 'Master of Business Administration',
      code: 'MBA',
      icon: '📊',
      description:
        'Management, leadership, business strategy, marketing, finance, and developing business leaders for tomorrow.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85',
      highlights: ['Strategic Management', 'Marketing', 'Finance', 'Human Resources'],
    },
    {
      name: 'Master of Computer Applications',
      code: 'MCA',
      icon: '💼',
      description:
        'Advanced software development, IT systems, enterprise applications, and modern programming paradigms for postgraduate students.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb218ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Advanced Programming', 'System Design', 'Cloud Computing', 'Mobile Development'],
    },
    {
      name: 'Science & Humanities',
      code: 'S&H',
      icon: '📚',
      description:
        'Foundation sciences, mathematics, physics, chemistry, and humanities. Providing strong academic foundation for all engineering disciplines.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5fGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'English Communication'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Departments | SVCET - Engineering & Management Programs</title>
        <meta
          name="description"
          content="Explore diverse engineering departments at SVCET including CSE, ECE, Mechanical, Civil, EEE, AI/ML, Cyber Security, MCA, and MBA programs."
        />
        <meta property="og:title" content="Departments at SVCET" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="departments-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl text-gray-100">
            Comprehensive programs across engineering and management disciplines
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-gray-50" data-testid="departments-grid">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Our Programs</h2>
            <p className="section-subtitle">
              Choose from 9 specialized departments designed for your success
            </p>
          </div>

          <div className="space-y-12">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
                data-testid={`department-${dept.code.toLowerCase()}`}
              >
                {/* Image */}
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-5xl mr-4">{dept.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
                      <p className="text-primary-700 font-semibold">{dept.code}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {dept.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-primary-700 mr-2">✓</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/admissions"
                    className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800"
                  >
                    Learn About Admissions
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white" data-testid="departments-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join SVCET?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Apply through TNEA and start your engineering journey today
          </p>
          <Link 
            to="/admissions" 
            className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-xl inline-flex items-center group"
          >
            View Admission Process
          </Link>
        </div>
      </section>
    </>
  );
};

export default Departments;
