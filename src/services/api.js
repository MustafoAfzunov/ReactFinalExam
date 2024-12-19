import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

// Fetch Pokémon details by ID
export const fetchPokemon = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
    return response.data;
};

// Fetch all Pokémon types
export const fetchPokemonTypes = async () => {
    const response = await axios.get(`${API_BASE_URL}/type`);
    return response.data.results;
};

// Fetch Pokémon by type
export const fetchPokemonByType = async (type) => {
    const response = await axios.get(`${API_BASE_URL}/type/${type}`);
    const pokemonList = response.data.pokemon.slice(0, 10).map((entry) => entry.pokemon); // Limit to 10 Pokémon

    // Fetch detailed data for each Pokémon
    const detailedPokemon = await Promise.all(
        pokemonList.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
                id: details.data.id,
                name: details.data.name,
                sprites: details.data.sprites,
                price: (Math.random() * 100).toFixed(2), // Random price for each Pokémon
            };
        })
    );
    return detailedPokemon;
};
