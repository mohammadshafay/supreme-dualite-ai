import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { mockProducts, Product, generateProducts } from '../../data/mockData';
import { Plus, Edit, Trash2 } from 'lucide-react';

const ProductFormModal = ({ product, onClose, onSave }: { product?: Product | null, onClose: () => void, onSave: (p: Product) => void }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    category: product?.category || 'Handloom Sarees',
    image: product?.image || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, id: product?.id || new Date().toISOString() });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-handloom-900 mb-6">{product ? t('admin.editProduct') : t('admin.addProduct')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">{t('admin.productName')}</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">{t('admin.productDescription')}</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full mt-1 p-2 border rounded-md" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">{t('admin.productPrice')}</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md" required />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">{t('admin.productCategory')}</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md" required>
                <option>Handloom Sarees</option>
                <option>Premium Fabrics</option>
                <option>Silk Scarves</option>
                <option>Traditional Clothing</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">{t('admin.productImageURL')}</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md" placeholder="https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500" />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">{t('admin.cancel')}</button>
            <button type="submit" className="px-4 py-2 bg-handloom-600 text-white rounded-md">{t('admin.save')}</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const AdminProductManagementPage: React.FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleSave = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([product, ...products]);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDelete = (productId: string) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-handloom-900">{t('admin.productManagement')}</h1>
        <button onClick={() => { setEditingProduct(null); setIsModalOpen(true); }} className="flex items-center space-x-2 bg-handloom-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-handloom-700">
          <Plus size={20} />
          <span>{t('admin.addProduct')}</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Image</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map(product => (
                <tr key={product.id}>
                  <td className="p-4"><img src={product.image} alt={product.name} className="w-16 h-16 rounded-md object-cover" /></td>
                  <td className="p-4 font-medium text-gray-800">{product.name}</td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4 text-gray-600">₹{product.price.toLocaleString('en-IN')}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button onClick={() => { setEditingProduct(product); setIsModalOpen(true); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"><Edit size={18} /></button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-full"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && <ProductFormModal product={editingProduct} onClose={() => setIsModalOpen(false)} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default AdminProductManagementPage;
