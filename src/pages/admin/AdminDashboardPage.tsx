import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  const adminStats = {
    totalUsers: 1547,
    totalOrders: 3829,
    totalRevenue: 2847650,
    growthRate: 12.5
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-handloom-900 mb-8">Admin Dashboard</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{adminStats.totalUsers.toLocaleString()}</p>
            </div>
          </div>
        </div>
         <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{adminStats.totalOrders.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{adminStats.totalRevenue.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-2xl font-bold text-gray-900">+{adminStats.growthRate}%</p>
              </div>
            </div>
          </div>
      </motion.div>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">Welcome, Admin!</h2>
        <p className="text-gray-600 mt-2">From here you can manage products, users, and site settings. Use the navigation on the left to get started.</p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
