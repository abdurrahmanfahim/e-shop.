import { useState, useEffect, useContext } from 'react';
import CartContext from './CartContext';
import AuthContext from './AuthContext';
import api from '../api/api';

const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    if (!user) return setCart({ items: [] });
    try {
      setLoading(true);
      const { data } = await api.get('/cart');
      setCart(data || { items: [] });
    } catch {
      setCart({ items: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCart(); }, [user]);

  const addItem = async (product, quantity = 1, variant = '') => {
    const { data } = await api.post('/cart', { product: product._id, quantity, variant, price: product.price });
    setCart(data);
  };

  const updateItem = async (itemId, quantity) => {
    const { data } = await api.put(`/cart/${itemId}`, { quantity });
    setCart(data);
  };

  const removeItem = async (itemId) => {
    const { data } = await api.delete(`/cart/${itemId}`);
    setCart(data);
  };

  const clearCart = async () => {
    await api.delete('/cart');
    setCart({ items: [] });
  };

  const itemCount = cart.items?.reduce((s, i) => s + i.quantity, 0) || 0;
  const subtotal = cart.items?.reduce((s, i) => s + i.price * i.quantity, 0) || 0;

  return (
    <CartContext.Provider value={{ cart, loading, addItem, updateItem, removeItem, clearCart, itemCount, subtotal, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
