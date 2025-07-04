import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Prof. Nagendra Kumar',
      role: 'Chaiman, ISC',
      description: 'Oversees all aspects of Sangram organization and coordination.',
      image: ''
    },
    {
      name: 'Prof. Bhanu Vellanki Prakash',
      role: 'Faculty Advisor, SSO',
      description: 'Manages all external collaborations and sponsorship deals.',
      image: ''
    },
    {
      name: 'Dr. Alok Kumar Pandey',
      role: 'Sports Officer',
      description: 'Coordinates all sporting events and athlete requirements.',
      image: ''
    },
    {
      name: 'Satyam',
      role: 'Co-Convener',
      description: 'Handles public relations and marketing strategies.',
      image: ''
    },
    { 
      name: 'Deepak Malik',
      role: 'Co-Convener',
      description: 'Manages technical infrastructure and digital platforms.',
      image: ''
    },
    {
      name: 'Mihir',
      role: 'Co-Convener',
      description: 'Ensures smooth logistics and accommodation arrangements.',
      image: ''
    },
    
  ];

  return (
    <div className="min-h-screen bg-[url('/assets/one.png')] bg-cover bg-center pt-16">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
            Our Team
          </h1>
          <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-90 max-w-3xl mx-auto">
            Meet the dedicated individuals making Sangram 2025 a grand success
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-yellow-300  rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-3">
                    {member.role}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-8">
            We're always looking for passionate individuals to help make Sangram even better
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-white to-yellow-300  text-black px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
