import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

// localStorage'dan favori karakterleri yükle
const savedFavorites = localStorage.getItem('favorites');
const initialState = {
  favorites: {
    list: savedFavorites ? JSON.parse(savedFavorites) : [],
  },
};

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState: initialState,
});

export default store;
