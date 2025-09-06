import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Target, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, value: '58+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Heart, value: '100%', label: 'Handcrafted' },
    { icon: Target, value: '50+', label: 'Product Varieties' }
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
            {t('about.title')}
          </h2>
          <p className="text-xl text-handloom-700 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-handloom-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-handloom-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-3xl font-bold text-handloom-900 mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-handloom-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-handloom-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-handloom-500 to-handloom-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-handloom-900 mb-4">
              {t('about.vision')}
            </h3>
            <p className="text-handloom-700 leading-relaxed">
              {t('about.visionText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-handloom-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-handloom-900 mb-4">
              {t('about.mission')}
            </h3>
            <p className="text-handloom-700 leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.div>
        </div>

        {/* Heritage Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative bg-gradient-to-r from-handloom-100 via-gold-100 to-handloom-100 p-12 rounded-3xl">
            <div className="absolute inset-0 bg-handloom-pattern opacity-20 rounded-3xl" />
            <div className="relative">
              <h3 className="text-3xl font-playfair font-bold text-handloom-900 mb-6">
                From 1967 to Today
              </h3>
              <p className="text-lg text-handloom-700 max-w-4xl mx-auto leading-relaxed">
                What started as a family business has grown into a trusted name in handloom textiles. 
                We continue to honor our heritage while embracing innovation, ensuring that each piece 
                we create tells a story of tradition, quality, and craftsmanship.
              </p>
              <div className="flex justify-center mt-8">
                <div className="bg-gradient-to-r from-handloom-600 to-gold-600 text-white px-8 py-3 rounded-full font-semibold">
                  Preserving Tradition • Creating Excellence
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
