import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-handloom-50 via-white to-gold-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-handloom-pattern opacity-30" />
      
      {/* Hero Content */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start mb-4"
              >
                <div className="flex items-center space-x-1 bg-gold-100 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-gold-600 fill-current" />
                  <span className="text-sm font-medium text-gold-800">58 {t('hero.legacy')}</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-playfair font-bold text-handloom-900 mb-4"
              >
                {t('hero.title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gold-600 font-medium mb-6"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-handloom-700 mb-8 leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => onNavigate('products')}
                  className="group bg-gradient-to-r from-handloom-600 to-handloom-700 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center space-x-2 hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t('hero.cta')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('contact')}
                  className="border-2 border-handloom-300 text-handloom-700 px-8 py-4 rounded-lg font-medium text-lg hover:bg-handloom-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.getInTouch')}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-br from-handloom-200 to-handloom-300 rounded-2xl h-48 overflow-hidden shadow-xl">
                    <img 
                      src="https://img-wrapper.vercel.app/image?url=https://placehold.co/300x400/8B4513/FFFFFF?text=Handloom+Saree" 
                      alt="Handloom Saree"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-gold-200 to-gold-300 rounded-2xl h-32 overflow-hidden shadow-xl">
                    <img 
                      src="https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/F59E0B/FFFFFF?text=Silk+Fabric" 
                      alt="Silk Fabric"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4 pt-8"
                >
                  <div className="bg-gradient-to-br from-gold-200 to-handloom-300 rounded-2xl h-32 overflow-hidden shadow-xl">
                    <img 
                      src="https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/D97706/FFFFFF?text=Traditional+Weave" 
                      alt="Traditional Weave"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-handloom-300 to-handloom-400 rounded-2xl h-48 overflow-hidden shadow-xl">
                    <img 
                      src="https://img-wrapper.vercel.app/image?url=https://placehold.co/300x400/A08072/FFFFFF?text=Artisan+Work" 
                      alt="Artisan Work"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full shadow-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">1967</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
