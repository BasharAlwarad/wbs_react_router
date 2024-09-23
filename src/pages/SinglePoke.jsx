import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePoke = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  const fetchPoke = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!res.ok) {
        console.log(res);
        throw new Error('Failed to fetch');
      }
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoke();
  }, [name]);

  if (loading) return <div>Loading....</div>;
  if (!pokemon) return <div>Not found</div>;

  const PokemonCries = ({ cries }) => {
    const renderCries = (cries) => {
      return Object.keys(cries).map((key) => {
        if (cries[key])
          return (
            <div key={key}>
              <audio controls>
                <source src={cries[key]} type="audio/mpeg" />
              </audio>
            </div>
          );
        return null;
      });
    };
    return (
      <div className="flex flex-wrap items-center justify-around">
        {renderCries(cries)}
      </div>
    );
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-between min-h-[80vh] bg-red-50">
      <div className="flex justify-around items-center mb-5">
        <h1 className="text-primary text-4xl capitalize">{pokemon.name}</h1>
        <div className="avatar">
          <div className="w-56 rounded-full bg-black">
            <img
              src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            />
          </div>
        </div>
      </div>
      <ul>
        {pokemon.stats.map(({ base_stat, stat }) => (
          <li key={stat.name} className="capitalize">
            {stat.name}: {base_stat}
          </li>
        ))}
      </ul>
      <PokemonCries cries={pokemon.cries} />
    </div>
  );
};

export default SinglePoke;
