import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-handloom-900 to-handloom-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">{t('companyName')}</h3>
                <p className="text-sm text-handloom-300">Since 1967</p>
              </div>
            </div>
            <p className="text-handloom-300 mb-4">
              Preserving traditional craftsmanship and creating exceptional handloom products for over five decades.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-handloom-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="text-handloom-300 hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/contact" className="text-handloom-300 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/customer-portal" className="text-handloom-300 hover:text-white transition-colors">{t('nav.customerPortal')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-2 text-handloom-300">
              <p>📞 +91 9119995353</p>
              <p>📧 supremehandloom@hotmail.com</p>
              <p>🏢 GST: 09ADLFS1368P1Z7</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-handloom-700 text-center">
          <p className="text-handloom-300">
            &copy; {new Date().getFullYear()} {t('companyName')}. All rights reserved. | Established 1967
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
