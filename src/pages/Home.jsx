import { useState, useEffect } from 'react';

import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPoke = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await res.json();
      console.log(data.results[0]);
      setPokemon(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPoke();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {pokemon.map(({ name, url }) => (
        <PokemonCard key={name} name={name} url={url} />
      ))}
    </div>
  );
};

export default Home;
