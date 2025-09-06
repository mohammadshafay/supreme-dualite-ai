import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { mockProducts, Product } from '../data/mockData';
import { Star, Tag, SlidersHorizontal } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const ProductListPage: React.FC = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [products] = useState<Product[]>(mockProducts);
  const [sortBy, setSortBy] = useState('default');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(mockProducts.map(p => p.category)))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (filterCategory !== 'all') {
      result = result.filter(p => p.category === filterCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, sortBy, filterCategory]);

  return (
    <div className="py-12 bg-gradient-to-b from-handloom-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-handloom-900 mb-4">
            {t('products.title')}
          </h1>
          <p className="text-xl text-handloom-700 max-w-3xl mx-auto">
            Explore our curated collection of handcrafted textiles.
          </p>
        </motion.div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <SlidersHorizontal className="text-handloom-600" />
            <span className="font-semibold text-handloom-800">{t('products.filter')}:</span>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-handloom-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-handloom-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-handloom-800">{t('products.sortBy')}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-handloom-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-handloom-500"
            >
              <option value="default">Default</option>
              <option value="price-asc">{t('products.priceLowHigh')}</option>
              <option value="price-desc">{t('products.priceHighLow')}</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-handloom-100 flex flex-col"
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-handloom-600 mb-2">
                    <Tag className="w-4 h-4 mr-2" />
                    <span>{product.category}</span>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-handloom-900 mb-2 h-14">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-handloom-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-gold-500 fill-current" />
                    <span className="text-sm text-handloom-600 ml-1">4.8</span>
                  </div>
                </div>
                <motion.button
                  onClick={() => addToCart(product, 1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-gradient-to-r from-handloom-600 to-handloom-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-md"
                >
                  {t('products.addToCart')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
