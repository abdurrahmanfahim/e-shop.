import { useState } from 'react';
import toast from 'react-hot-toast';
import FavoritesContext from './FavoritesContext';

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favorites')) || [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      const updated = exists
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
      localStorage.setItem('favorites', JSON.stringify(updated));
      toast(exists ? '💔 Removed from favorites' : '❤️ Added to favorites', {
        style: { fontFamily: 'Montserrat', fontSize: '14px' },
      });
      return updated;
    });
  };

  const isFavorite = (id) => favorites.some((p) => p.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
