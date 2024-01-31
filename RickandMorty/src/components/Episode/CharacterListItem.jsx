import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterListItem = ({ characterUrl }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(characterUrl);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [characterUrl]);

  return character ? <li key={character.id}>{character.name}</li> : null;
};

export default CharacterListItem;
