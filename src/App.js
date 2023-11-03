import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonData from './components/PokemonData';
import FavPokemonPage from './components/FavPokemon';
import pokemonLogo from './pokemon-logo.png';

function App() {
  const [pokemonData, setPokemonData] = useState("");
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);
  const [favPokemon, setFavPokemon] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    // Create an async function to fetch data
    const loadPoke = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
          signal, // Pass the signal to the Axios request
        });
        setPokemonData(response.data);
        setLoading(false);

      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    }

    loadPoke();

    // Cleanup function to abort the request when the component unmounts or a new request is made
    return () => abortController.abort();
  }, [number]);

  const prevPokemon = () => {
    setNumber((number) => number - 1);
  }
  const nextPokemon = () => {
    setNumber((number) => number + 1);
  }

  const addFavPokemon = () => {
    setFavPokemon((prevFav) => [...prevFav, pokemonData]);
  }

  return (
    <div className="App">
      <div className="Top-bar">
        <img src={pokemonLogo} alt="Pokemon logo" />       
      </div>
      <div className="Data">
        <div className="Pokemon-page">
          <PokemonData pokemonData={pokemonData} addFavPokemon={addFavPokemon} />
          <div className="Button">
            <button className="Prev-button" onClick={prevPokemon}>Previous</button>
            <button className="Next-button" onClick={nextPokemon}>Next</button>
          </div>
        </div>
        <div className="Fav-pokemon-page">
          <FavPokemonPage fav={favPokemon} />
        </div>
      </div>
    </div>
  );
}

export default App;
