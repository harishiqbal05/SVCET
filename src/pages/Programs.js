import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Programs = () => {
  const undergraduatePrograms = [
    {
      name: 'Computer Science & Engineering',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '💻',
    },
    {
      name: 'Electronics & Communication Engineering',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '📡',
    },
    {
      name: 'Mechanical Engineering',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '⚙️',
    },
    {
      name: 'Civil Engineering',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '🏗️',
    },
    {
      name: 'Electrical & Electronics Engineering',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '⚡',
    },
    {
      name: 'Artificial Intelligence & Machine Learning',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '🤖',
    },
    {
      name: 'Cyber Security',
      degree: 'B.E. / B.Tech',
      duration: '4 Years',
      icon: '🔒',
    },
  ];

  const postgraduatePrograms = [
    {
      name: 'Master of Computer Applications',
      degree: 'MCA',
      duration: '2 Years',
      icon: '💼',
      description: 'Advanced software development and IT systems',
    },
    {
      name: 'Master of Business Administration',
      degree: 'MBA',
      duration: '2 Years',
      icon: '📊',
      description: 'Management, leadership, and business strategy',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Programs Offered | SVCET - UG & PG Engineering Programs</title>
        <meta
          name="description"
          content="SVCET offers undergraduate (BE/B.Tech) and postgraduate (MCA, MBA) programs affiliated to Anna University."
        />
        <meta property="og:title" content="Programs at SVCET" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="programs-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs Offered</h1>
          <p className="text-xl text-gray-100">
            Undergraduate and Postgraduate programs approved by Anna University
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white" data-testid="program-overview">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Academic Programs</h2>
            <p className="section-subtitle">
              Choose from a wide range of engineering and management programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Undergraduate</h3>
              <p className="text-3xl font-bold text-primary-700 mb-2">7 Programs</p>
              <p className="text-gray-600">B.E. / B.Tech (4 Years)</p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Postgraduate</h3>
              <p className="text-3xl font-bold text-primary-700 mb-2">2 Programs</p>
              <p className="text-gray-600">MCA, MBA (2 Years)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="py-16 bg-gray-50" data-testid="undergraduate-programs">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Undergraduate Programs</h2>
            <p className="section-subtitle">Bachelor of Engineering / Bachelor of Technology (4 Years)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergraduatePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                data-testid={`ug-program-${index}`}
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{program.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Degree:</span>
                    {program.degree}
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Duration:</span>
                    {program.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="py-16 bg-white" data-testid="postgraduate-programs">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Postgraduate Programs</h2>
            <p className="section-subtitle">Advanced programs for specialized knowledge (2 Years)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {postgraduatePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all"
                data-testid={`pg-program-${index}`}
              >
                <div className="text-6xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Degree:</span>
                    {program.degree}
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Duration:</span>
                    {program.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-primary-50" data-testid="program-features">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Makes Our Programs Special?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎓',
                title: 'Anna University Curriculum',
                description: 'Updated syllabus aligned with industry requirements',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Faculty',
                description: 'Experienced and qualified teaching professionals',
              },
              {
                icon: '🔬',
                title: 'Practical Learning',
                description: 'Well-equipped labs for hands-on experience',
              },
              {
                icon: '💼',
                title: 'Industry Exposure',
                description: 'Internships and industrial training programs',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Admission */}
      <section className="py-16 bg-white" data-testid="eligibility-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Eligibility & Admission</h2>
            </div>

            <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">How to Apply?</h3>
              <p className="text-lg mb-6 text-gray-100">
                All admissions are through <strong>Tamil Nadu Engineering Admissions (TNEA)</strong>
              </p>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-6">
                <p className="text-xl font-semibold mb-2">TNEA Counselling Code:</p>
                <p className="text-4xl font-bold">4967</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  <span>Eligibility as per Anna University norms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  <span>Merit-based admission through TNEA counselling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-400 mr-2">✓</span>
                  <span>Government-approved fee structure</span>
                </li>
              </ul>
              <Link
                to="/admissions"
                className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
              >
                View Complete Admission Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
