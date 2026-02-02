import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const admissionSteps = [
    {
      step: '1',
      title: 'Qualify HSC/12th Standard',
      description: 'Complete your Higher Secondary Education with required subjects and marks',
      icon: '📚',
    },
    {
      step: '2',
      title: 'Register for TNEA',
      description: 'Register online on the official TNEA portal during the admission period',
      icon: '📝',
    },
    {
      step: '3',
      title: 'Attend Counselling',
      description: 'Participate in TNEA counselling and select SVCET using code 4967',
      icon: '💼',
    },
    {
      step: '4',
      title: 'Get Allotment',
      description: 'Receive your seat allotment based on your rank and preferences',
      icon: '✅',
    },
    {
      step: '5',
      title: 'Complete Admission',
      description: 'Report to college with required documents and complete admission formalities',
      icon: '🎓',
    },
  ];

  const eligibilityUG = [
    'Passed Higher Secondary (10+2) or equivalent examination',
    'Physics, Chemistry, and Mathematics as core subjects',
    'Minimum marks as per Anna University norms',
    'Valid TNEA application and rank',
  ];

  const eligibilityPG = [
    'MCA: Bachelor\'s degree in any discipline with Mathematics at 10+2 level or graduation level',
    'MBA: Bachelor\'s degree in any discipline from a recognized university',
    'Valid entrance test score (as per Anna University requirements)',
  ];

  const requiredDocuments = [
    '10th and 12th Mark Sheets',
    'Transfer Certificate',
    'Community Certificate (if applicable)',
    'Nativity Certificate',
    'Aadhaar Card',
    'Passport Size Photographs',
    'TNEA Allotment Letter',
    'Income Certificate (for scholarship)',
  ];

  return (
    <>
      <Helmet>
        <title>Admissions | SVCET - TNEA Code 4967 | Anna University Affiliated</title>
        <meta
          name="description"
          content="Apply to SVCET through TNEA counselling. TNEA Code: 4967. Anna University affiliated engineering college admission details and eligibility criteria."
        />
        <meta property="og:title" content="Admissions at SVCET" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="admissions-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-gray-100 mb-4">
            Join SVCET - Your Gateway to Excellence in Engineering
          </p>
          <div className="inline-block bg-white bg-opacity-20 rounded-lg px-6 py-3">
            <p className="text-sm font-semibold mb-1">TNEA Counselling Code</p>
            <p className="text-4xl font-bold" data-testid="tnea-code">4967</p>
          </div>
        </div>
      </section>

      {/* TNEA Information */}
      <section className="py-16 bg-white" data-testid="tnea-info">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">🎯</div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Admission through TNEA</h2>
                  <p className="text-gray-100">
                    Tamil Nadu Engineering Admissions - Single Window System
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                All admissions to SVCET engineering programs are conducted through the centralized
                <strong> Tamil Nadu Engineering Admissions (TNEA)</strong> counselling process
                conducted by Anna University.
              </p>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Important Information:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span><strong>College Code:</strong> 4967 (Use this during TNEA counselling)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span><strong>Affiliation:</strong> Anna University, Chennai</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span><strong>Approval:</strong> AICTE Approved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span><strong>Admission Mode:</strong> Merit-based through TNEA rank</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 bg-gray-50" data-testid="admission-steps">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">Step-by-step guide to join SVCET</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {admissionSteps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start mb-8 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                data-testid={`admission-step-${index}`}
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 bg-primary-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-3">{item.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-white" data-testid="eligibility-criteria">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Eligibility Criteria</h2>
            <p className="section-subtitle">Requirements for admission to various programs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* UG Eligibility */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-700 mb-6 flex items-center">
                <span className="text-4xl mr-3">🎓</span>
                Undergraduate (B.E./B.Tech)
              </h3>
              <ul className="space-y-3">
                {eligibilityUG.map((criteria, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-2 mt-1">✓</span>
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PG Eligibility */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-700 mb-6 flex items-center">
                <span className="text-4xl mr-3">🎯</span>
                Postgraduate (MCA/MBA)
              </h3>
              <ul className="space-y-3">
                {eligibilityPG.map((criteria, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-2 mt-1">✓</span>
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700">
              <strong>Note:</strong> Eligibility criteria are as per Anna University and AICTE norms.
              Please check the official TNEA website for the most current requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50" data-testid="required-documents">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Required Documents</h2>
            <p className="section-subtitle">Documents needed at the time of admission</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md flex items-center"
                  data-testid={`document-${index}`}
                >
                  <span className="text-2xl mr-3">📄</span>
                  <span className="text-gray-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-center">
              All documents should be original along with one set of photocopies
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white" data-testid="fee-structure">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Fee Structure</h2>
            <div className="bg-primary-50 rounded-lg p-8 mt-8">
              <p className="text-gray-700 text-lg mb-4">
                The fee structure is approved by the government and follows Anna University guidelines.
              </p>
              <p className="text-gray-700 text-lg">
                For detailed fee information, please contact the admission office:
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-primary-700 font-semibold">
                  <a href="tel:+919025262526" className="hover:underline">+91 9025262526</a>
                </p>
                <p className="text-primary-700 font-semibold">
                  <a href="tel:+914636234742" className="hover:underline">+91 4636 234742</a>
                </p>
                <p className="text-primary-700 font-semibold">
                  <a href="mailto:info@svccollege.ac.in" className="hover:underline">info@svccollege.ac.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white" data-testid="admissions-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions About Admissions?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Our admission office is here to help you with all your queries
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block"
            data-testid="contact-admission-office"
          >
            Contact Admission Office
          </Link>
        </div>
      </section>
    </>
  );
};

export default Admissions;
