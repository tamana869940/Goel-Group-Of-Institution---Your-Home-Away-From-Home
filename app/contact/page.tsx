'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Clickable Google Map */}
      <div className="relative h-96 md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Clickable Google Map */}
        <a
          href="https://maps.app.goo.gl/ywfwvjVmk6Kt1ftd6"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        ></a>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2977121367485!2d81.08050667529416!3d26.89404517665833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f2f5b8b9591%3A0xbd9e770717a687c0!2sGoel%20Group%20of%20Institutions%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1743010650457!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0"
          title="Goel Group Of Institution Location"
        ></iframe>

        {/* Dark overlay for better visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contact Us Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-900 px-6 py-16"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Reach out to us for any inquiries or assistance.
        </motion.p>
      </motion.div>

      {/* Contact Section */}
      <div className="container px-4 md:px-6 mx-auto py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute inset-y-0 left-0 pl-3 text-gray-400 top-3" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <FiMail className="absolute inset-y-0 left-0 pl-3 text-gray-400 top-3" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute inset-y-0 left-0 pl-3 text-gray-400 top-3" />
                      <textarea
                        rows={4}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <FiMapPin className="text-blue-600 mr-3 text-2xl" />
                  Campus Address
                </h2>
                <p className="text-gray-700">123 University Road, Near College Campus, Lucknow, UP - 226028</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <FiPhone className="text-blue-600 mr-3 text-2xl" />
                  Contact Details
                </h2>
                <p className="text-gray-700">Phone: +91 98765 43210</p>
                <p className="text-gray-700">Email: admissions@goelinstitution.com</p>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <FiClock className="text-blue-600 mr-3 text-2xl" />
                  Office Hours
                </h2>
                <p className="text-gray-700">Monday-Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
