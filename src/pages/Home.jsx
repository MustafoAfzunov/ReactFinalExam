import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPokemon, fetchPokemonByType } from '../services/api';
import { useShop } from '../context/ShopContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/Sidebar';

const Home = ({ searchTerm }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const { dispatch } = useShop();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const promises = Array.from({ length: 10 }, (_, i) => fetchPokemon(i + 1));
            const results = await Promise.all(promises);
            const pokemonWithPrices = results.map(p => ({ ...p, price: (Math.random() * 100).toFixed(2) }));
            setPokemonList(pokemonWithPrices);
        };
        fetchData();
    }, []);

    const handleTypeSelect = async (type) => {
        setLoading(true);
        const filteredPokemon = await fetchPokemonByType(type);
        setPokemonList(filteredPokemon);
        setLoading(false);
    };

    const handleAction = async (actionType, pokemon) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        dispatch({ type: actionType, payload: pokemon });
        setLoading(false);

        // Show notification
        const message = actionType === 'ADD_TO_CART'
            ? `${pokemon.name} added to cart!`
            : `${pokemon.name} added to wishlist!`;
        toast.success(message);
    };

    const filteredPokemonList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <Sidebar onTypeSelect={handleTypeSelect} />

            {/* Main Content */}
            <div className="container mt-4" style={{ marginLeft: '220px' }}>
                <h1>Pokémon Shop</h1>
                {loading && (
                    <div style={loaderStyle}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                <div className="row">
                    {filteredPokemonList.map((pokemon) => (
                        <div className="col-md-4 mb-3" key={pokemon.id}>
                            <div className="card">
                                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p>Price: ${pokemon.price}</p>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleAction('ADD_TO_CART', pokemon)}
                                    >
                                        Buy
                                    </button>
                                    <button
                                        className="btn btn-secondary ml-2"
                                        onClick={() => handleAction('ADD_TO_WISHLIST', pokemon)}
                                    >
                                        Add to Wishlist
                                    </button>
                                    <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary ml-2">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const loaderStyle = {
    position: 'fixed',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    zIndex: 1050,
};

export default Home;
