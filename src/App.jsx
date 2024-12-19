import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { ShopProvider, useShop } from './context/ShopContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ onSearch }) => {
    const { state } = useShop();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Pokémon Shop</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                Cart <span className="badge bg-primary">{state.cart.length}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/wishlist">
                                Wishlist <span className="badge bg-secondary">{state.wishlist.length}</span>
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Pokémon"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
};

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <ShopProvider>
            <Router>
                <ToastContainer />
                <Navbar onSearch={setSearchTerm} />
                <Routes>
                    <Route path="/" element={<Home searchTerm={searchTerm} />} />
                    <Route path="/pokemon/:id" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </Router>
        </ShopProvider>
    );
};

export default App;
