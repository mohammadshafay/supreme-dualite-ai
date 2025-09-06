import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe, User, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const { t, i18n } = useTranslation();
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ur', name: 'اردو' }
  ];

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/products', label: t('nav.products') },
    { to: '/contact', label: t('nav.contact') }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguages(false);
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-handloom-600 to-gold-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
            </motion.div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-handloom-900">{t('companyName')}</h1>
              <p className="text-xs text-handloom-600">{t('hero.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-handloom-700 border-b-2 border-gold-500'
                      : 'text-handloom-600 hover:text-handloom-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <motion.button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="p-2 text-handloom-600 hover:text-handloom-800 rounded-full hover:bg-handloom-50"
                  whileHover={{ scale: 1.1 }}
                >
                  <Globe size={20} />
                </motion.button>
                <AnimatePresence>
                  {showLanguages && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-handloom-200 py-1"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full text-left px-4 py-2 text-sm text-handloom-700 hover:bg-handloom-50"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/cart" className="relative p-2 text-handloom-600 hover:text-handloom-800 rounded-full hover:bg-handloom-50">
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="relative group">
                   <button className="p-2 text-handloom-600 hover:text-handloom-800 rounded-full hover:bg-handloom-50">
                      <User size={20} />
                   </button>
                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-handloom-200 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-4 py-2 text-sm text-handloom-700 border-b">{user.name}</div>
                      <Link to="/customer-portal" className="block w-full text-left px-4 py-2 text-sm text-handloom-700 hover:bg-handloom-50">
                        {t('nav.customerPortal')}
                      </Link>
                      <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        {t('nav.logout')}
                      </button>
                   </div>
                </div>
              ) : (
                <Link to="/login" className="text-sm font-medium text-handloom-600 hover:text-handloom-800">{t('nav.login')}</Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-handloom-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-handloom-200">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-handloom-50 text-handloom-800' : 'text-handloom-600 hover:bg-handloom-50'}`}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Link to="/admin/login" className="absolute top-0 right-0 w-4 h-4 opacity-0 cursor-pointer" title="Admin Portal" />
    </nav>
  );
};

export default Navbar;
