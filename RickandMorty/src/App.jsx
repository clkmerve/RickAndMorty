import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Redux store
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Search from './components/Search/Search';
import FavoritesPage from './pages/FavoritesPage';
import EpisodeList from './components/Episode/EpisodeList';
import EpisodeDetails from './components/Episode/EpisodeDetails';
import CharacterDetailsPage from './pages/CharacterDetailsPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`);
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };
  //sayfa yüklendiğinde karakterleri getir
  useEffect(() => {
    fetchCharacters();
  }, [searchQuery]); 

  return (
    <Provider store={store}>
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Search onSearch={setSearchQuery} />
            <h1>Rick and Morty Karakterleri</h1>
            <div className="results">
              {characters.map((character) => (
                <Card key={character.id} character={character} />
              ))}
            </div>
          </>} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/episode" element={<EpisodeList/>} />
        <Route path="/episode/:episodeId" element={<EpisodeDetails/>} />
        <Route path="/character/:id" element={<CharacterDetailsPage />}>
            
          </Route>
        </Routes>
      </div>
   
  </Provider>
  );
}

export default App;
