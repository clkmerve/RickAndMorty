// src/pages/CharacterDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, selectFavorites } from '../store/favoritesSlice';

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  const toggleFavorite = () => {
    const isCharacterFavorite = favorites.some((favCharacter) => favCharacter.id === parseInt(id));

    if (isCharacterFavorite) {
      dispatch(removeFavorite(parseInt(id)));
    } else {
      dispatch(addFavorite({
        id: parseInt(id),
        name: character.name,
        image: character.image,
        //karakter özellikleri
      }));
      alert('Karakter favorilere eklendi!');
    }
  };

  return (
    <div>
      <h2>Karakter Detayları</h2>
      {character && (
        <div>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <button onClick={toggleFavorite}>
            {favorites.some((favCharacter) => favCharacter.id === parseInt(id)) ?
              'Favoriden Çıkart' : 'Ekle'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailsPage;
