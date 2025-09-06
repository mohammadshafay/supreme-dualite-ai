import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Star, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 1,
      title: t('products.sarees'),
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/8B4513/FFFFFF?text=Handloom+Sarees',
      description: 'Exquisite handwoven sarees in traditional patterns',
      price: '₹5,000 - ₹25,000',
      rating: 4.9,
      reviews: 150
    },
    {
      id: 2,
      title: t('products.fabrics'),
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/F59E0B/FFFFFF?text=Premium+Fabrics',
      description: 'High-quality fabrics for custom tailoring',
      price: '₹800 - ₹3,500',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: t('products.scarves'),
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/D97706/FFFFFF?text=Silk+Scarves',
      description: 'Luxurious silk scarves with intricate designs',
      price: '₹1,200 - ₹4,800',
      rating: 4.9,
      reviews: 67
    },
    {
      id: 4,
      title: t('products.clothing'),
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/A08072/FFFFFF?text=Traditional+Wear',
      description: 'Traditional clothing for special occasions',
      price: '₹3,500 - ₹15,000',
      rating: 4.7,
      reviews: 94
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-handloom-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-handloom-900 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-handloom-700 max-w-3xl mx-auto">
            Discover our carefully curated collection of handwoven masterpieces, 
            each piece telling a story of traditional craftsmanship and timeless elegance.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-handloom-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-5 h-5 text-handloom-600" />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-handloom-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-handloom-600 mb-4 text-sm">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-handloom-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-handloom-900">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-handloom-600 to-handloom-700 text-white p-2 rounded-full hover:from-handloom-700 hover:to-handloom-800 transition-all shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-handloom-600 to-gold-600 p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-handloom-pattern opacity-20" />
            <div className="relative">
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Custom Orders Available
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Looking for something specific? We create custom handloom pieces tailored to your requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-handloom-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-handloom-50 transition-colors shadow-lg"
              >
                Contact for Custom Orders
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
