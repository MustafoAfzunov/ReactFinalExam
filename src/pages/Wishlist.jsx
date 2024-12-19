import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Wishlist = () => {
    const { state, dispatch } = useShop();
    const [searchTerm, setSearchTerm] = useState('');

    const removeFromWishlist = (pokemon) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: pokemon });
        toast.error(`${pokemon.name} removed from wishlist!`);
    };

    // Filter Pokémon based on the search term
    const filteredWishlist = state.wishlist.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>Your Wishlist</h1>
            {/* Search Bar */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search Pokémon in wishlist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredWishlist.length === 0 ? (
                <p>Your wishlist is empty or no Pokémon match your search.</p>
            ) : (
                <div className="row">
                    {filteredWishlist.map((pokemon) => (
                        <div className="col-md-4 mb-3" key={pokemon.id}>
                            <div className="card">
                                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeFromWishlist(pokemon)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
