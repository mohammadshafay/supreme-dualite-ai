import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { User, Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 bg-gradient-to-br from-handloom-50 via-white to-gold-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-handloom-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-handloom-900 mb-2">{t('auth.loginTitle')}</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-handloom-700 mb-2">{t('auth.email')}</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-handloom-400 w-5 h-5" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-11 pr-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-handloom-700 mb-2">{t('auth.password')}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-handloom-400 w-5 h-5" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full pl-11 pr-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500" />
            </div>
          </div>
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-handloom-600 to-handloom-700 text-white py-3 rounded-xl font-semibold text-lg">
            {t('auth.loginButton')}
          </motion.button>
        </form>
        <p className="text-center text-sm text-handloom-600 mt-6">
          {t('auth.noAccount')} <Link to="/register" className="font-semibold text-handloom-700 hover:underline">{t('auth.signUp')}</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
