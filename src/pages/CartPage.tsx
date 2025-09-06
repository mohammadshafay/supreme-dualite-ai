import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage: React.FC = () => {
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="py-12 bg-gradient-to-b from-handloom-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-playfair font-bold text-handloom-900 mb-8 text-center">{t('cart.title')}</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <p className="text-xl text-handloom-700 mb-6">{t('cart.empty')}</p>
            <Link to="/products" className="bg-gradient-to-r from-handloom-600 to-handloom-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg">
              {t('cart.browse')}
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border-b border-handloom-100"
                >
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <h3 className="font-semibold text-handloom-800">{item.name}</h3>
                      <p className="text-sm text-handloom-600">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-handloom-200 rounded-lg">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-handloom-600 hover:bg-handloom-50 rounded-l-lg"><Minus size={16} /></button>
                      <span className="px-3">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-handloom-600 hover:bg-handloom-50 rounded-r-lg"><Plus size={16} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
              <h2 className="text-2xl font-playfair font-bold text-handloom-900 mb-6 border-b pb-4">{t('cart.total')}</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-handloom-700">
                  <span>{t('cart.subtotal')}</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-handloom-700">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-xl text-handloom-900 pt-4 border-t">
                  <span>{t('cart.total')}</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-handloom-600 to-handloom-700 text-white py-3 rounded-lg font-semibold hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg">
                {t('cart.checkout')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
