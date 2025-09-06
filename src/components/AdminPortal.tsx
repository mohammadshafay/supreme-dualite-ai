import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Users, ShoppingCart, Settings, BarChart3, DollarSign, TrendingUp, Eye, EyeOff } from 'lucide-react';
import { faker } from '@faker-js/faker';

const AdminPortal: React.FC = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  // Generate mock admin data
  const adminStats = {
    totalUsers: 1547,
    totalOrders: 3829,
    totalRevenue: 2847650,
    growthRate: 12.5
  };

  const recentOrders = Array.from({ length: 6 }, () => ({
    id: faker.string.uuid(),
    customer: faker.person.fullName(),
    product: faker.helpers.arrayElement(['Handloom Saree', 'Silk Fabric', 'Traditional Wear', 'Silk Scarf']),
    amount: faker.finance.amount({ min: 5000, max: 50000, dec: 0 }),
    status: faker.helpers.arrayElement(['Processing', 'Shipped', 'Delivered', 'Pending']),
    date: faker.date.recent().toLocaleDateString('en-IN')
  }));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication - in real app, this would be secure
    if (credentials.username === 'admin' && credentials.password === 'supreme2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin/supreme2024');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-handloom-900 to-black">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-handloom-200"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-playfair font-bold text-handloom-900 mb-2">
                {t('admin.title')}
              </h1>
              <p className="text-handloom-600">
                Secure Administrative Access
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="admin-username" className="block text-sm font-medium text-handloom-700 mb-2">
                  Admin Username
                </label>
                <input
                  type="text"
                  id="admin-username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter admin username"
                />
              </div>

              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-handloom-700 mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="admin-password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-handloom-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Enter admin password"
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
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
              >
                Secure Login
              </motion.button>
            </form>

            {/* Credentials Hint */}
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-800">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: supreme2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-handloom-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-xl text-handloom-700">Supreme Handloom Management Portal</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Total Users</p>
                <p className="text-2xl font-bold text-handloom-900">{adminStats.totalUsers.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Total Orders</p>
                <p className="text-2xl font-bold text-handloom-900">{adminStats.totalOrders.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Total Revenue</p>
                <p className="text-2xl font-bold text-handloom-900">₹{adminStats.totalRevenue.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-handloom-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-handloom-600">Growth Rate</p>
                <p className="text-2xl font-bold text-handloom-900">+{adminStats.growthRate}%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-handloom-100"
          >
            <div className="p-6 border-b border-handloom-100">
              <h3 className="text-2xl font-playfair font-bold text-handloom-900 flex items-center space-x-2">
                <ShoppingCart className="w-6 h-6" />
                <span>Recent Orders</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-handloom-25 rounded-xl hover:bg-handloom-50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-handloom-900">{order.customer}</p>
                      <p className="text-sm text-handloom-600">{order.product}</p>
                      <p className="text-xs text-handloom-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-handloom-900">₹{parseInt(order.amount).toLocaleString('en-IN')}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-handloom-100">
              <h3 className="text-xl font-playfair font-bold text-handloom-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-handloom-50 hover:bg-handloom-100 rounded-xl transition-colors">
                  <Users className="w-5 h-5 text-handloom-600" />
                  <span className="text-handloom-700">Manage Users</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-handloom-50 hover:bg-handloom-100 rounded-xl transition-colors">
                  <ShoppingCart className="w-5 h-5 text-handloom-600" />
                  <span className="text-handloom-700">View Orders</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-handloom-50 hover:bg-handloom-100 rounded-xl transition-colors">
                  <BarChart3 className="w-5 h-5 text-handloom-600" />
                  <span className="text-handloom-700">Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-handloom-50 hover:bg-handloom-100 rounded-xl transition-colors">
                  <Settings className="w-5 h-5 text-handloom-600" />
                  <span className="text-handloom-700">Settings</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-handloom-600 to-gold-600 p-6 rounded-3xl text-white">
              <h4 className="text-lg font-semibold mb-3">System Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-handloom-100">Server Health</span>
                  <span className="text-green-200">●</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-handloom-100">Database</span>
                  <span className="text-green-200">●</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-handloom-100">API Services</span>
                  <span className="text-green-200">●</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
