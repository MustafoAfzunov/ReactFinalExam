import React, { useState } from 'react';
import { fetchPokemonTypes } from '../services/api';

const Sidebar = ({ onTypeSelect }) => {
    const [types, setTypes] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        const fetchTypes = async () => {
            const response = await fetchPokemonTypes();
            setTypes(response);
        };
        fetchTypes();
    }, []);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {/* Hamburger Menu Button */}
            <button
                className="btn btn-dark"
                style={hamburgerStyle}
                onClick={toggleSidebar}
            >
                ☰
            </button>

            {/* Sidebar */}
            <div
                style={{
                    ...sidebarStyle,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                }}
            >
                <h5>Categories</h5>
                <ul style={listStyle}>
                    {types.map((type) => (
                        <li key={type.name} style={listItemStyle}>
                            <button
                                style={buttonStyle}
                                onClick={() => onTypeSelect(type.name)}
                            >
                                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay */}
            {isVisible && (
                <div
                    style={overlayStyle}
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

const sidebarStyle = {
    width: '200px',
    height: '100vh',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '15px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    transition: 'transform 0.3s ease-in-out',
};

const hamburgerStyle = {
    position: 'fixed',
    top: '15px',
    left: '15px',
    zIndex: '1100',
    fontSize: '1.5rem',
    border: 'none',
    background: 'none',
    color: 'white',
    cursor: 'pointer',
};

const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
};

const listItemStyle = {
    marginBottom: '10px',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#495057',
    color: 'white',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.3s',
};

const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
};

export default Sidebar;
    