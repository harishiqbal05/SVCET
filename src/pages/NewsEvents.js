import React from 'react';
import { Helmet } from 'react-helmet-async';

const NewsEvents = () => {
  const announcements = [
    {
      date: 'March 15, 2024',
      title: 'TNEA 2024 Counselling Schedule Announced',
      category: 'Admissions',
      description:
        'Tamil Nadu Engineering Admissions (TNEA) 2024 counselling schedule has been announced. Students are advised to check the official TNEA portal for detailed dates and procedures.',
      icon: '📢',
    },
    {
      date: 'March 10, 2024',
      title: 'National Level Technical Symposium',
      category: 'Events',
      description:
        'SVCET is organizing a National Level Technical Symposium on Emerging Technologies. Students from various colleges are invited to participate in technical paper presentations and competitions.',
      icon: '🎮',
    },
    {
      date: 'March 5, 2024',
      title: 'Industry Expert Lecture Series',
      category: 'Academic',
      description:
        'Special lecture series by industry experts from leading companies. Topics include AI/ML applications, IoT in Industry 4.0, and Career opportunities in Engineering.',
      icon: '🎯',
    },
    {
      date: 'February 28, 2024',
      title: 'Campus Placement Drive - Success Story',
      category: 'Placements',
      description:
        'Excellent placement results with leading companies visiting our campus. Over 150+ students secured placement offers in reputed organizations across various sectors.',
      icon: '🎉',
    },
    {
      date: 'February 20, 2024',
      title: 'Workshop on Research Methodology',
      category: 'Workshop',
      description:
        'Three-day workshop on Research Methodology for faculty and PG students. Focus on research paper writing, data analysis, and publication strategies.',
      icon: '📚',
    },
    {
      date: 'February 15, 2024',
      title: 'Annual Sports Meet 2024',
      category: 'Sports',
      description:
        'SVCET Annual Sports Meet concluded successfully with enthusiastic participation from students in various indoor and outdoor events. Winners were awarded prizes and certificates.',
      icon: '🏆',
    },
    {
      date: 'February 10, 2024',
      title: 'Entrepreneurship Development Program',
      category: 'Workshop',
      description:
        'One-week Entrepreneurship Development Program organized in collaboration with industry partners. Students learned about startup ecosystem, funding, and business planning.',
      icon: '💡',
    },
    {
      date: 'January 25, 2024',
      title: 'Cultural Fest - SVCET Utsav 2024',
      category: 'Cultural',
      description:
        'Grand cultural fest featuring music, dance, drama, and art competitions. Students showcased their talents and celebrated the diversity of Indian culture.',
      icon: '🎭',
    },
  ];

  const upcomingEvents = [
    {
      date: 'April 2024',
      title: 'Technical Paper Presentation Competition',
      description: 'Inter-college competition for UG and PG students',
    },
    {
      date: 'May 2024',
      title: 'Summer Internship Program',
      description: 'Industry internship opportunities for final year students',
    },
    {
      date: 'June 2024',
      title: 'TNEA 2024 Counselling',
      description: 'Admission process for academic year 2024-25',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Admissions: 'bg-blue-100 text-blue-700',
      Events: 'bg-purple-100 text-purple-700',
      Academic: 'bg-green-100 text-green-700',
      Placements: 'bg-yellow-100 text-yellow-700',
      Workshop: 'bg-pink-100 text-pink-700',
      Sports: 'bg-orange-100 text-orange-700',
      Cultural: 'bg-red-100 text-red-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <>
      <Helmet>
        <title>News & Events | SVCET - Latest Updates & Announcements</title>
        <meta
          name="description"
          content="Stay updated with latest news, events, and announcements from SVCET. Campus activities, admissions, workshops, and more."
        />
        <meta property="og:title" content="News & Events at SVCET" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16" data-testid="news-events-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-gray-100">
            Stay Updated with Latest Happenings at SVCET
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white" data-testid="upcoming-events">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Mark your calendar for these exciting events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`upcoming-event-${index}`}
              >
                <div className="text-4xl mb-3">📅</div>
                <p className="text-secondary-400 font-semibold mb-2">{event.date}</p>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-100 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Announcements */}
      <section className="py-16 bg-gray-50" data-testid="recent-announcements">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Recent Announcements</h2>
            <p className="section-subtitle">Latest news and updates from SVCET</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
                data-testid={`announcement-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="text-5xl">{announcement.icon}</div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          getCategoryColor(announcement.category)
                        }`}
                      >
                        {announcement.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{announcement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white" data-testid="event-categories">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Campus Life at SVCET</h2>
            <p className="section-subtitle">
              A vibrant campus with diverse activities and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Technical Events',
                description: 'Symposiums, hackathons, and project exhibitions',
              },
              {
                icon: '🎭',
                title: 'Cultural Programs',
                description: 'Festivals, competitions, and talent shows',
              },
              {
                icon: '🏆',
                title: 'Sports Activities',
                description: 'Inter-college tournaments and sports meets',
              },
              {
                icon: '📚',
                title: 'Workshops & Seminars',
                description: 'Skill development and guest lectures',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-16 bg-primary-50" data-testid="gallery-preview">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Campus Activities</h2>
            <p className="section-subtitle">Glimpses of life at SVCET</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="Students collaborating"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-semibold">Academic Excellence</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9ufGVufDB8fHx8MTcwOTk0NTQ4OXww&ixlib=rb-4.1.0&q=85"
                alt="Graduation celebration"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-semibold">Success Stories</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjYW1wdXN8ZW58MHx8fHwxNzA5OTQ1NDg5fDA&ixlib=rb-4.1.0&q=85"
                alt="Campus life"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-semibold">Vibrant Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white" data-testid="stay-connected">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected with SVCET
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Follow us on social media for latest updates and announcements
          </p>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
              aria-label="Facebook"
              onClick={() => window.open('https://facebook.com', '_blank')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button
              type="button"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
              aria-label="Twitter"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button
              type="button"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
              aria-label="LinkedIn"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvents;
