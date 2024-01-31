import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const existingCharacter = state.list.find((character) => character.id === action.payload.id);
      if (!existingCharacter) {
        state.list.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.list));
      }
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((character) => character.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.list));
    },
  },
});


export const selectFavorites = (state) => state.favorites.list;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
