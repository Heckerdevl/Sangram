import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/one.png')] bg-cover bg-center pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-90 max-w-3xl mx-auto">
            Get in touch with the Sangram team for any queries or information
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-cover bg-center relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Mail className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-80">sangram@iitr.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Phone className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="opacity-80">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Instagram className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="opacity-80">@sangram_iitr</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="opacity-80">
                      IIT Roorkee, Roorkee, Uttarakhand 247667
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-opacity-10 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-white block mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-md bg-yellow-200 bg-opacity-90 border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white block mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-md bg-yellow-200 bg-opacity-90 border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-white block mb-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-md bg-yellow-200 bg-opacity-90 border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-white block mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className="w-full p-3 rounded-md bg-yellow-200 bg-opacity-90 border-none resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-12">
            Find Us Here
          </h2>
          <div className="h-96 rounded-4xl overflow-hidden">
            <iframe
              title="IIT Roorkee Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2416536189934!2d77.88878201511272!3d29.864843481940498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3a2318f4fb9%3A0xbddaa22874fd1d91!2sIIT%20Roorkee!5e0!3m2!1sen!2sin!4v1628962938471!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
