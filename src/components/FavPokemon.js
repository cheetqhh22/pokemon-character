import React from 'react';

function FavPokemonPage({ fav }) {
  return (
    <div className="Fav-pokemon-page">
      <h2>My Favorite Pokémon Characters</h2>
      <div className="Fav-pokemon">
        {fav?.map((data, index) => (
          <div key={index} className="Card-fav-pokemon">
            <img src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavPokemonPage;