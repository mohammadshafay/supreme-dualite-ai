import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+91 9119995353',
      href: 'tel:+919119995353'
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'supremehandloom@hotmail.com',
      href: 'mailto:supremehandloom@hotmail.com'
    },
    {
      icon: MapPin,
      label: t('contact.gst'),
      value: '09ADLFS1368P1Z7',
      href: null
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Sat: 9:00 AM - 7:00 PM',
      href: null
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-handloom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-handloom-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-handloom-700 max-w-3xl mx-auto">
            We would love to hear from you. Get in touch with us for any inquiries about our products or custom orders.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-handloom-900 mb-8">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-handloom-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-handloom-500 to-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-handloom-600 mb-1">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-lg font-semibold text-handloom-900 hover:text-handloom-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-handloom-900">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Heritage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-r from-handloom-100 to-gold-100 rounded-3xl"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-handloom-pattern opacity-20 rounded-3xl" />
                <div className="relative">
                  <h4 className="text-2xl font-playfair font-bold text-handloom-900 mb-4">
                    Supreme Handloom
                  </h4>
                  <p className="text-handloom-700 mb-4">
                    Established in 1967, we have been serving customers with premium handloom textiles for over five decades. 
                    Our commitment to quality and traditional craftsmanship has made us a trusted name in the industry.
                  </p>
                  <div className="flex items-center text-gold-700 font-semibold">
                    <span className="w-3 h-3 bg-gold-500 rounded-full mr-2"></span>
                    Since 1967 • Family Business • Traditional Craftsmanship
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-handloom-100"
          >
            <h3 className="text-3xl font-playfair font-bold text-handloom-900 mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-handloom-700 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-handloom-700 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-handloom-700 mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500 focus:border-transparent transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-handloom-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements or any questions you have..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-handloom-600 to-handloom-700 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>{t('contact.send')}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
