import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show maintenance message for form submission
    setFormStatus('maintenance');
    setTimeout(() => {
      setFormStatus('');
    }, 8000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: 'SVCET, SV Nagar, Puliangudi – 627 855, Tirunelveli District, Tamil Nadu, India',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 9025262526, +91 4636 234742',
      links: [
        { text: '+91 9025262526', href: 'tel:+919025262526' },
        { text: '+91 4636 234742', href: 'tel:+914636234742' },
      ],
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@svccollege.ac.in',
      links: [{ text: 'info@svccollege.ac.in', href: 'mailto:info@svccollege.ac.in' }],
    },
  ];

  const departments = [
    { name: 'Admission Office', phone: '+91 9025262526' },
    { name: 'Principal Office', phone: '+91 4636 234742' },
    { name: 'Placement Cell', email: 'placement@svccollege.ac.in' },
    { name: 'Library', email: 'library@svccollege.ac.in' },
  ];

  // Exact coordinates for SVCET from Google Maps
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.123456789!2d77.4245381!3d9.1768913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0690f7d76ee07f:0xc10a9792bd8eb8dc!2sS.Veerasamy+Chettiar+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <>
      <Helmet>
        <title>Contact Us | SVCET - Get in Touch with Admission Office</title>
        <meta
          name="description"
          content="Contact SVCET for admissions, inquiries, and campus information. Address: Puliangudi, Tirunelveli. Phone: +91 9025262526, +91 4636 234742"
        />
        <meta property="og:title" content="Contact SVCET" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="contact-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">
            We're here to help! Get in touch with us for any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white" data-testid="contact-info-cards">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                data-testid={`contact-card-${index}`}
              >
                <div className="text-6xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.links ? (
                  <div className="space-y-2">
                    {info.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="text-primary-700 hover:text-primary-800 hover:underline block"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50" data-testid="contact-form-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {formStatus === 'maintenance' && (
                <div
                  className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6 rounded-lg shadow-md"
                  role="alert"
                  data-testid="form-maintenance-message"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">Under Maintenance</h3>
                      <p className="text-amber-700 mb-3">
                        We're currently upgrading our contact system to serve you better! The online form submission option is temporarily unavailable.
                      </p>
                      <div className="bg-amber-100 rounded-md p-3 mb-3">
                        <p className="text-amber-800 text-sm font-medium mb-2">📞 Alternative Ways to Reach Us:</p>
                        <ul className="text-amber-700 text-sm space-y-1">
                          <li>• Call us: <a href="tel:+919025262526" className="font-semibold hover:underline">+91 9025262526</a></li>
                          <li>• Email us: <a href="mailto:info@svccollege.ac.in" className="font-semibold hover:underline">info@svccollege.ac.in</a></li>
                          <li>• Visit our campus during office hours</li>
                        </ul>
                      </div>
                      <p className="text-amber-600 text-sm">
                        Thank you for your patience. We'll be back soon with an enhanced contact experience!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
                data-testid="contact-form"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                    placeholder="Enter your full name"
                    data-testid="contact-name-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                    placeholder="your.email@example.com"
                    data-testid="contact-email-input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                    placeholder="+91 XXXXXXXXXX"
                    data-testid="contact-phone-input"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                    data-testid="contact-subject-select"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Programs & Courses</option>
                    <option value="facilities">Facilities</option>
                    <option value="placement">Placement & Career</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                    data-testid="contact-message-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary"
                  data-testid="contact-submit-button"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Quick Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-8" data-testid="google-map">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SVCET Location Map"
                ></iframe>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                      <p className="font-semibold text-gray-900">{dept.name}</p>
                      {dept.phone && (
                        <a
                          href={`tel:${dept.phone}`}
                          className="text-primary-700 hover:underline text-sm"
                        >
                          {dept.phone}
                        </a>
                      )}
                      {dept.email && (
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-primary-700 hover:underline text-sm block"
                        >
                          {dept.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-primary-700 text-white rounded-lg p-6 shadow-lg mt-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 1:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-16 bg-white" data-testid="how-to-reach">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How to Reach SVCET</h2>
            <p className="section-subtitle">We're easily accessible from major locations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🚌</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">By Bus</h3>
              <p className="text-gray-600 text-sm">
                Regular bus services available from Tirunelveli and nearby towns
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚂</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">By Train</h3>
              <p className="text-gray-600 text-sm">
                Nearest railway station: Tirunelveli Junction (approx. 30 km)
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">By Air</h3>
              <p className="text-gray-600 text-sm">
                Nearest airport: Tuticorin Airport (approx. 60 km)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" data-testid="contact-faq">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'What is the TNEA counselling code for SVCET?',
                  answer: 'The TNEA counselling code for SVCET is 4967.',
                },
                {
                  question: 'When does the admission process start?',
                  answer: 'Admissions are conducted through TNEA counselling as per the schedule announced by Anna University, typically in July-August each year.',
                },
                {
                  question: 'Does SVCET provide hostel facilities?',
                  answer: 'Yes, we provide separate hostel facilities for both boys and girls with all necessary amenities.',
                },
                {
                  question: 'What are the available transportation options?',
                  answer: 'SVCET provides college bus services covering major routes in Tirunelveli district for student convenience.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
