'use client'
import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

export default function ProductsPage() {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    price: '',
    quantity: '',
    description: '',
    collection: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProduct(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product data:', product);
    alert('Product data saved locally! (Next: save to file or GitHub)');
  };

  return (
    <AdminLayout>
      <h1 className="text-xl font-bold mb-4">Upload Product</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="sku" value={product.sku} onChange={handleChange} placeholder="SKU" required />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" />
        <input name="collection" value={product.collection} onChange={handleChange} placeholder="Collection (e.g. Water Pipes)" />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {product.image && (
          <img src={URL.createObjectURL(product.image)} alt="Preview" width={150} style={{ marginTop: '10px' }} />
        )}
        <button type="submit" style={{ padding: '10px', background: '#111', color: 'white', border: 'none' }}>
          Save Product
        </button>
      </form>
    </AdminLayout>
  );
}
