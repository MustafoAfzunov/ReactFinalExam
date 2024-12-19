import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../services/api';

const Details = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemon(id);
            setPokemon(data);
        };
        fetchData();
    }, [id]);

    if (!pokemon) return (
        <div style={loadingStyle}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );

    return (
        <div className="container mt-4">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="row no-gutters">
                    <div className="col-md-4 text-center">
                        <img
                            src={pokemon.sprites.front_default}
                            className="card-img-top img-fluid"
                            alt={pokemon.name}
                            style={{ maxWidth: '200px', margin: '0 auto' }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-capitalize">{pokemon.name}</h1>
                            <p className="card-text"><strong>Height:</strong> {pokemon.height / 10} m</p>
                            <p className="card-text"><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
                            <p className="card-text"><strong>Base Experience:</strong> {pokemon.base_experience}</p>
                            <p className="card-text"><strong>Abilities:</strong></p>
                            <ul>
                                {pokemon.abilities.map((ability, index) => (
                                    <li key={index}>{ability.ability.name}</li>
                                ))}
                            </ul>
                            <p className="card-text"><strong>Stats:</strong></p>
                            <ul>
                                {pokemon.stats.map((stat, index) => (
                                    <li key={index}>
                                        {stat.stat.name}: {stat.base_stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

export default Details;
