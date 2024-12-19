import React, { useState, useEffect } from 'react';
import { fetchPokemonTypes } from '../services/api';

const Sidebar = ({ onTypeSelect }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            const response = await fetchPokemonTypes();
            setTypes(response);
        };
        fetchTypes();
    }, []);

    return (
        <div style={sidebarStyle}>
            <h5>Categories</h5>
            <ul style={listStyle}>
                {types.map(type => (
                    <li key={type.name} style={listItemStyle}>
                        <button
                            style={buttonStyle}
                            onClick={() => onTypeSelect(type.name)} // Pass type name to parent
                        >
                            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const sidebarStyle = {
    width: '200px',
    height: '100%',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '15px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
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

export default Sidebar;
