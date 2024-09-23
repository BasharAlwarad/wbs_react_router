import { Link } from 'react-router-dom';

const PokemonCard = ({ name, url }) => {
  const id = url?.split('/')[6] || '0';
  return (
    <div className="card bg-neutral  shadow-xl">
      <figure>
        <img
          src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width="40%"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize text-primary">
          {name}
          <Link to={`/pokemon/${name}`} className="btn btn-secondary">
            Learn more
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default PokemonCard;
