import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ShopContext = createContext();

const shopReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(pokemon => pokemon.id !== action.payload.id) };
        case 'ADD_TO_WISHLIST':
            return { ...state, wishlist: [...state.wishlist, action.payload] };
        case 'REMOVE_FROM_WISHLIST':
            return { ...state, wishlist: state.wishlist.filter(pokemon => pokemon.id !== action.payload.id) };
        case 'INITIALIZE_STATE':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    loading: false,
};
export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    // Load state from localStorage on initialization
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const storedWishlist = localStorage.getItem('wishlist');

        if (storedCart || storedWishlist) {
            dispatch({ type: 'INITIALIZE_STATE', payload: {
                cart: storedCart ? JSON.parse(storedCart) : [],
                wishlist: storedWishlist ? JSON.parse(storedWishlist) : []
            } });
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    }, [state.cart, state.wishlist]);

    return (
        <ShopContext.Provider value={{ state, dispatch }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
