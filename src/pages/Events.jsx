import React, { useState } from 'react';

const Events = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null); // removed :string | null

  const events = [
    { name: 'Football', description: 'The beautiful game - 11v11 competition with knockout format' , url: '/assets/Events/football1.jpg' },
    { name: 'Hockey', description: 'Fast-paced stick and ball sport on grass field', url: '/assets/Events/hockey.webp' },
    { name: 'Cricket', description: 'Limited overs cricket tournament with teams across India', url: '/assets/Events/cricket.webp' },
    { name: 'Athletics', description: 'Track and field events including sprints, jumps, and throws', url: '/assets/Events/Athletics.jpg' },
    { name: 'Badminton', description: 'Singles and doubles tournaments in indoor courts' , url: '/assets/Events/badminton.jpg'},
    { name: 'Basketball', description: '5v5 basketball with both men\'s and women\'s categories', url: '/assets/Events/basketball.jpg' },
    { name: 'Table Tennis', description: 'Fast-paced indoor sport with singles and doubles events', url: '/assets/Events/tabletennis.jpg' },
    { name: 'Volleyball', description: '6v6 volleyball competition on outdoor courts' , url: '/assets/Events/volleyball.jpg'},
    { name: 'Taekwondo', description: 'Martial arts competition with weight categories' , url: '/assets/Events/taekwondo.avif'},
    { name: 'Weight-lifting', description: 'Powerlifting competition with multiple weight classes', url: '/assets/Events/weightlifting.jpg' },
    { name: 'Chess', description: 'Strategic board game tournament with time controls', url: '/assets/Events/chess.jpg' },
    { name: 'Squash', description: 'Indoor racquet sport played in enclosed courts' , url: '/assets/Events/squash.webp'},
    { name: 'E-Sports', description: 'Competitive gaming tournaments in popular titles' , url: '/assets/Events/esports.jpg'},
    { name: 'Swimming', description: 'Pool swimming events in various strokes and distances' , url: '/assets/Events/swimming.avif'},
    { name: 'Lawn Tennis', description: 'Outdoor tennis singles and doubles competitions', url: '/assets/Events/lawntennis.avif' }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[url('/assets/one.png')] bg-cover bg-center">
      {/* Hero Section */}
      <section className="bg-gradient-to-r  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
            Events
          </h1>
          <p className="text-xl text-yellow-200 opacity-90 max-w-3xl mx-auto">
            Compete in 15+ sports categories and showcase your athletic prowess
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${event.url})` }}
                className="`bg-{event.url}` bg-cover bg-center rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredEvent(event.name)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className="p-6">
                  <div className="w-16 h-25 rounded-full flex items-center justify-center mx-auto mb-4">
                    
                  </div>

                  {/* Hover Description */}
                  {hoveredEvent === event.name && (
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-yellow-600 bg-opacity-95 p-4 animate-fade-in">
                      <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                        {event.name}
                      </h3>
                      <p className="text-black text-center text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent h-14 mb-6">
            Ready to Compete?
          </h2>
          <p className="text-xl text-yellow-400 mb-8">
            Register now to participate in your favorite events and be part of Sangram 2025
          </p>
          <a
            href="/register"
            className="inline-block bg-gradient-to-r from-white/50 to-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
