import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-[url('/assets/one.png')] bg-cover bg-center">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-10 h-20">
            About Sangram
          </h1>
          <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-90 max-w-3xl mx-auto">
            Discover the legacy and spirit of IIT Roorkee's premier sports festival
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent h-14">
                History of Sangram
              </h2>
              <p className="text-yellow-200 text-lg leading-relaxed mb-4">
                Sangram, which means "battle" in Sanskrit, has been the flagship sports event of IIT Roorkee for over two decades. What started as a small inter-college competition has evolved into one of the most prestigious sports festivals in Northern India.
              </p>
              <p className="text-yellow-200 text-lg leading-relaxed">
                The festival embodies the spirit of healthy competition, bringing together talented athletes from across the nation to compete in various sporting disciplines while fostering friendships and sportsmanship.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <img
                src="/assets/Historical01.jpg"
                alt="Historical Image"
                className="object-cover w-full h-full border-5 border-yellow-300 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-white to-yellow-300/60 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-black leading-relaxed">
                To establish Sangram as the premier sports festival in India, promoting excellence in athletics while fostering unity, discipline, and the spirit of fair play among participants from diverse backgrounds.
              </p>
            </div>
            <div className="bg-gradient-to-l from-white to-yellow-300/60 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-black leading-relaxed">
                To provide a platform for young athletes to showcase their talents, compete at the highest level, and build lasting relationships while upholding the values of sportsmanship and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* National Participation */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-12">
            National-Level Participation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">Participating Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">Colleges Nationwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">Sports Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committee Message */}
      <section className="py-16 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-yellow-300 bg-clip-text text-transparent  h-14">
            Message from Organizing Committee
          </h2>
          <blockquote className="text-xl text-yellow-200 opacity-90 italic leading-relaxed">
            "Sangram represents more than just competition; it's a celebration of human potential, dedication, and the unifying power of sports. We invite athletes from across the nation to be part of this incredible journey of excellence and camaraderie."
          </blockquote>
          <div className="mt-6 text-yellow-200">
            <p className="font-semibold">- Sangram Organizing Committee</p>
            <p className="text-sm opacity-80">IIT Roorkee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
