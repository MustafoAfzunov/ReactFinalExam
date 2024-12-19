import React from 'react';
import { useShop } from '../context/ShopContext';

const GlobalLoader = () => {
    const { state } = useShop();

    return (
        state.loading && (
            <div style={loaderStyle}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    );
};

const loaderStyle = {
    position: 'fixed',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    zIndex: 1050,
};

export default GlobalLoader;
