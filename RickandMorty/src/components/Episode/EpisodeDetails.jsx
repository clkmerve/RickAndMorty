import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CharacterListItem from './CharacterListItem';

const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        setEpisode(response.data);
        setCharacters(response.data.characters);
      } catch (error) {
        console.error('Error fetching episode details:', error);
      }
    };

    fetchEpisodeDetails();
  }, [episodeId]);

  return (
    <div>
      <h2>BÖLÜM DETAYLARI</h2>
      {episode && (
        <div>
          <h3>{episode.name}</h3>
          <p>Air Date: {episode.air_date}</p>
        </div>
      )}

      {characters.length > 0 && (
        <div>
          <h3>Bölüm Karakterleri</h3>
          <ul>
            {characters.map((characterUrl) => (
              <li key={characterUrl}>
                <Link to={`/character/${extractCharacterId(characterUrl)}`}>
                  <CharacterListItem characterUrl={characterUrl} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

//karakter URL'sinden karakter ID'sini çıkarır.
const extractCharacterId = (characterUrl) => {
  const parts = characterUrl.split('/');
  return parts[parts.length - 1];
};

export default EpisodeDetails;
