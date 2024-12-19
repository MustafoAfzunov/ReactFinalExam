import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Cart = () => {
    const { state, dispatch } = useShop();
    const [searchTerm, setSearchTerm] = useState('');

    const removeFromCart = (pokemon) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: pokemon });
        toast.error(`${pokemon.name} removed from cart!`);
    };

    // Filter Pokémon based on the search term
    const filteredCart = state.cart.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>Your Cart</h1>
            {/* Search Bar */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search Pokémon in cart..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredCart.length === 0 ? (
                <p>Your cart is empty or no Pokémon match your search.</p>
            ) : (
                <div className="row">
                    {filteredCart.map((pokemon) => (
                        <div className="col-md-4 mb-3" key={pokemon.id}>
                            <div className="card">
                                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p>Price: ${pokemon.price}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeFromCart(pokemon)}
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

export default Cart;
