import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { mockProducts } from '../data/mockData';
import { useCart } from '../hooks/useCart';
import { Tag, CheckCircle, ShoppingCart } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const product = mockProducts.find(p => p.id === id);
  const relatedProducts = mockProducts.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center text-sm text-handloom-600 mb-2">
              <Tag className="w-4 h-4 mr-2" />
              <span>{product.category}</span>
            </div>
            <h1 className="text-4xl font-playfair font-bold text-handloom-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-handloom-800 mb-6">₹{product.price.toLocaleString('en-IN')}</p>
            
            <div className="flex items-center text-green-600 mb-6">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>{t('productDetail.inStock')}</span>
            </div>

            <h3 className="text-xl font-semibold text-handloom-900 mb-2">{t('productDetail.description')}</h3>
            <p className="text-handloom-700 leading-relaxed mb-8">{product.description}</p>

            <motion.button
              onClick={() => addToCart(product, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-handloom-600 to-handloom-700 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>{t('products.addToCart')}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-playfair font-bold text-handloom-900 mb-8 text-center">{t('productDetail.relatedProducts')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(related => (
              <Link to={`/products/${related.id}`} key={related.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <img src={related.image} alt={related.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                  <div className="p-4">
                    <h4 className="font-semibold text-handloom-800 truncate">{related.name}</h4>
                    <p className="text-handloom-600">₹{related.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
