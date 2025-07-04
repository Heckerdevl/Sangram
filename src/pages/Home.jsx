import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { Mail, Phone, Instagram } from 'lucide-react';

const sponsors = [
  { src: '/assets/Sponser/beardo.png', alt: 'Beardo' },
  { src: '/assets/Sponser/biosync.png', alt: 'Biosync' },
  { src: '/assets/Sponser/biryani.png', alt: 'Biryani by Kilo' },
  { src: '/assets/Sponser/cry.png', alt: 'CRY Foundation' },
  { src: '/assets/Sponser/divyang.png', alt: 'Divyang Foundation' },
  { src: '/assets/Sponser/lassi.png', alt: 'Lassi Shop' },
  { src: '/assets/Sponser/mv.png', alt: 'MV Speaker' },
  { src: '/assets/Sponser/nescafe.png', alt: 'Nescafé' },
  { src: '/assets/Sponser/ongc.png', alt: 'ONGC' },
  { src: '/assets/Sponser/pjf.png', alt: 'PJF' },
  { src: '/assets/Sponser/sbi.png', alt: 'SBI' },
  { src: '/assets/Sponser/shiv.png', alt: 'Shiv Naresh' },
  { src: '/assets/Sponser/spics.png', alt: 'SPIC MACAY' },
  { src: '/assets/Sponser/sportskeeda.png', alt: 'Sportskeeda' },
  { src: '/assets/Sponser/srl.png', alt: 'SRL Diagnostics' },
  { src: '/assets/Sponser/yogabar.png', alt: 'Yogabar' }
];


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/assets/one.png')] bg-cover bg-center flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="w-24 h-30 mx-auto mb-6 bg-[url('/assets/logo.png')] bg-cover bg-center bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl font-bold text-black"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            SANGRAM
          </h1>
          <h2 className="text-xl md:text-2xl mb-2 font-semibold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            IIT Roorkee Annual Sports Fest
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-100 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            19th to 21st September, 2025
          </p>
          <div className="mb-8">
            <CountdownTimer />
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            Sangram is IIT Roorkee's prestigious annual sports fest, uniting colleges and athletes across the nation in the spirit of competition, fitness, and sportsmanship.
          </p>
          <a
            href="/assets/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-white to-yellow-300 hover:bg-yellow-600 text-black px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200">
              View Brochure
            </button>
          </a>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-16 bg-black h-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            Our Past Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-white/50 to-yellow-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="w-24 h-20 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
              Contact Us
            </h2>

            {/* <div className="flex justify-center space-x-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mail className="text-white" size={20} />
                </div>
                <span className="text-white text-sm">Email</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone className="text-white" size={20} />
                </div>
                <span className="text-white text-sm">Phone</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Instagram className="text-white" size={20} />
                </div>
                <span className="text-white text-sm">Instagram</span>
              </div>
            </div> */}

            <form className="space-y-4 h-100">
              <div>
                <label htmlFor="name" className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-1">Name</label>
                <input id="name" type="text" className="w-full p-3 rounded-md bg-yellow-200 bg-opacity-90 border-none" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-1">Email</label>
                <input id="email" type="email" className="w-full p-3 rounded-md bg-yellow-200 bg-opacity-90 border-none" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-1">Message</label>
                <textarea id="message" rows={3} className="w-full p-3 rounded-md bg-yellow-200 bg-opacity-90 border-none resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md transform hover:scale-105 transition-all duration-200">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
