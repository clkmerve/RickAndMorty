import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EpisodeList.css';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bölümler</h1>

      
      <input
        type="text"
        placeholder="Bölüm Ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredEpisodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
