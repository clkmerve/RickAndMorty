import './Card.css'
import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { addFavorite, removeFavorite, selectFavorites } from '../../store/favoritesSlice';

const Card = ({ character }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  
  const isCharacterFavorite = favorites.some((favCharacter) => favCharacter.id === character.id);
  const isFavoritesFull = favorites.length >= 10;

  const toggleFavorite = () => {
    if (isCharacterFavorite) {
      dispatch(removeFavorite(character.id));
    } else {
      if (!isFavoritesFull) {
        dispatch(addFavorite(character));
        alert('Karakter favorilere eklendi!');
      } else {
        alert('Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.');
      }
    }
  };


  return (
    <div className='results'>
    <div className="card">
    <Link to={`/character/${character.id}`} className="character-link">
          <img src={character.image} alt={character.name} />
          <div className='text1'>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          </div>
        </Link>
      <button onClick={toggleFavorite}>
        {character.isFavorite ? 'Remove from Favorites' : 'Ekle'}
      </button>
    </div>
    </div>
  );
};
export default Card;
