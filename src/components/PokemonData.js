import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PokemonData({ pokemonData, addFavPokemon }) {
    return (
        <div className="Pokemon-data">
            <div>
                <h1 className="Pokemon-name">{pokemonData?.name}</h1>
                <FontAwesomeIcon id="Heart" icon={faHeart} style={{ color: "#fe3155", }} onClick={addFavPokemon} />
            </div>
            <img src={pokemonData?.sprites?.other?.home?.front_default} alt={pokemonData?.name} />
            <div className="Abilities">
                <h3>Abilities</h3>
                <ul className="Abilities-data">
                    {pokemonData?.abilities?.map((data, index) => (
                        <li key={index}>{data.ability.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonData;