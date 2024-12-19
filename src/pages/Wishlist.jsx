import React from 'react';
import { useShop } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Wishlist = () => {
    const { state, dispatch } = useShop();

    const removeFromWishlist = (pokemon) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: pokemon });
        toast.error(`${pokemon.name} removed from wishlist!`);
    };

    return (
        <div className="container mt-4">
            <h1>Your Wishlist</h1>
            {state.wishlist.length === 0 ? (
                <p>Your wishlist is empty. Add some Pokémon to your wishlist!</p>
            ) : (
                <div className="row">
                    {state.wishlist.map((pokemon) => (
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
