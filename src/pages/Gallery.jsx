import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/assets/Gallery/atheletics.jpg', label: 'Athletics' },
  { src: '/assets/Gallery/badminton.jpg', label: 'Badminton' },
  { src: '/assets/Gallery/chess.jpg', label: 'Chess' },
  { src: '/assets/Gallery/disc.jpg', label: 'Disc Thrower' },
  { src: '/assets/Gallery/football.jpg', label: 'Football' },
  { src: '/assets/Gallery/hockey.jpg', label: 'Hockey' },
  { src: '/assets/Gallery/running.jpg', label: 'Running' },
  { src: '/assets/Gallery/tennis.jpg', label: 'Tennis' },
  { src: '/assets/Gallery/weightlifting.jpg', label: 'Weightlifting' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/one.png')] bg-cover bg-center pt-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
          Glimpses of Glory
        </h1>
        <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-90 mb-4">
          Past Events Gallery
        </h2>
        <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-80 max-w-3xl mx-auto">
          Relive the highlights of India's most prestigious sports festival
        </p>
      </section>

      {/* Sliding Gallery */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory scroll-smooth "
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="min-w-[300px] h-[200px] rounded-xl overflow-hidden relative shadow-lg snap-center flex-shrink-0 group "
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black   opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-end p-3">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
