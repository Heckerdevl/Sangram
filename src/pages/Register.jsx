import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    events: []
  });

  const events = [
    'Football', 'Hockey', 'Cricket', 'Athletics', 'Badminton',
    'Basketball', 'Table Tennis', 'Volleyball', 'Taekwondo',
    'Weight-lifting', 'Chess', 'Squash', 'E-Sports', 'Swimming', 'Lawn Tennis'
  ];

  const handleEventChange = (event) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.college || formData.events.length === 0) {
      alert("Please fill all fields and select at least one event.");
      return;
    }

    alert("Registration Successful! Your registration has been submitted successfully.");
    setFormData({ name: '', email: '', college: '', events: [] });
  };

  return (
    <div className="min-h-screen bg-[url('/assets/one.png')] bg-cover bg-center pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
            Join the Action
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-90 mb-4">
            Register for Sangram 2025
          </h2>
          <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-80 max-w-3xl mx-auto">
            Be part of India's most prestigious sports festival
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-l from-yellow-400 opacity-80 to-yellow-600 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-white">
                <label htmlFor="name" className="block mb-1">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-md bg-white text-black border-none focus:outline-none"
                />
              </div>

              <div className="text-white">
                <label htmlFor="email" className="block mb-1">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-md bg-white text-black border-none focus:outline-none"
                />
              </div>

              <div className="text-white">
                <label htmlFor="college" className="block mb-1">College/Institution *</label>
                <input
                  id="college"
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData(prev => ({ ...prev, college: e.target.value }))}
                  placeholder="Enter your college name"
                  className="w-full px-4 py-2 rounded-md bg-white text-black border-none focus:outline-none"
                />
              </div>

              <div className="text-white">
                <label className="block mb-2">Events Interested In * (Select multiple)</label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                  {events.map((event) => (
                    <label key={event} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.events.includes(event)}
                        onChange={() => handleEventChange(event)}
                        className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-800">{event}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-l from-white to-yellow-400 text-black py-3 text-lg font-semibold rounded-md hover:scale-105 transition-all duration-200"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
