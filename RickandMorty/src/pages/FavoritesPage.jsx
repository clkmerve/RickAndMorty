import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites, removeFavorite } from '../store/favoritesSlice';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleRemove = (characterId, characterName) => {
    const isConfirmed = window.confirm(`"${characterName}" karakterini silmek istediğinizden emin misiniz?`);

    if (isConfirmed) {
      dispatch(removeFavorite(characterId));
    }
  };

  return (
    <div>
      <h1 style={{ justifyContent: "space-around" }}>Favori Karakterler</h1>

      <div style={{ justifyContent: "space-around" }}>
        {favorites.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            {character.name}{' '}
            <button onClick={() => handleRemove(character.id, character.name)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
