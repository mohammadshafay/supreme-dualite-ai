import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, Lock, Eye, EyeOff, CreditCard, Calendar, DollarSign, AlertCircle } from 'lucide-react';
import { faker } from '@faker-js/faker';

const CustomerPortal: React.FC = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  // Generate mock creditor data
  const generateCreditorData = () => {
    return Array.from({ length: 8 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      company: faker.company.name(),
      amount: faker.finance.amount({ min: 10000, max: 500000, dec: 0 }),
      dueDate: faker.date.future().toLocaleDateString('en-IN'),
      status: faker.helpers.arrayElement(['Pending', 'Partial', 'Paid']),
      phone: faker.phone.number(),
      email: faker.internet.email()
    }));
  };

  const [creditorData] = useState(generateCreditorData());

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app, this would verify credentials
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Partial': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-handloom-50 via-white to-gold-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-handloom-100"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-handloom-600 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-playfair font-bold text-handloom-900 mb-2">
                {t('customer.title')}
              </h1>
              <p className="text-handloom-600">
                Access your creditor details and account information
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-handloom-700 mb-2">
                  {t('customer.username')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-handloom-400 w-5 h-5" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500 focus:border-transparent transition-all"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-handloom-700 mb-2">
                  {t('customer.password')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-handloom-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-11 pr-12 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-handloom-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-handloom-400 hover:text-handloom-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-handloom-600 to-handloom-700 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg hover:shadow-xl"
              >
                {t('customer.loginButton')}
              </motion.button>
            </form>

            {/* Demo Note */}
            <div className="mt-6 p-4 bg-gold-50 border border-gold-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gold-800">Demo Login</p>
                  <p className="text-xs text-gold-700 mt-1">
                    Enter any username and password to access the demo portal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-handloom-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-handloom-900 mb-4">
            {t('customer.welcome')}
          </h1>
          <p className="text-xl text-handloom-700">
            {t('customer.creditorDetails')}
          </p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="mt-4 text-handloom-600 hover:text-handloom-800 underline"
          >
            Logout
          </button>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Total Outstanding</p>
                <p className="text-2xl font-bold text-handloom-900">
                  ₹{creditorData.reduce((sum, item) => sum + parseInt(item.amount), 0).toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Pending Payments</p>
                <p className="text-2xl font-bold text-handloom-900">
                  {creditorData.filter(item => item.status !== 'Paid').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Total Creditors</p>
                <p className="text-2xl font-bold text-handloom-900">{creditorData.length}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Creditor Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-handloom-100 overflow-hidden"
        >
          <div className="p-6 bg-gradient-to-r from-handloom-600 to-gold-600">
            <h3 className="text-2xl font-playfair font-bold text-white">
              Creditor Details
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-handloom-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-handloom-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-handloom-700">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-handloom-700">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-handloom-700">Due Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-handloom-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-handloom-700">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-handloom-100">
                {creditorData.map((creditor, index) => (
                  <motion.tr
                    key={creditor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hover:bg-handloom-25 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-handloom-900">{creditor.name}</div>
                    </td>
                    <td className="px-6 py-4 text-handloom-700">{creditor.company}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-handloom-900">
                        ₹{parseInt(creditor.amount).toLocaleString('en-IN')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-handloom-700">{creditor.dueDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(creditor.status)}`}>
                        {creditor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-handloom-700">
                        <div>{creditor.phone}</div>
                        <div className="text-handloom-500">{creditor.email}</div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerPortal;
