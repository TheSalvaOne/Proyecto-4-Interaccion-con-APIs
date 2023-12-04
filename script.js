document.addEventListener('DOMContentLoaded', function () {
    const changePokemonBtn = document.getElementById('changePokemonBtn');
    const pokemonInfoContainer = document.getElementById('pokemonInfoContainer');
    const pokemonImage = document.getElementById('pokemonImage');

    // Función para obtener datos de un Pokémon aleatorio
    async function fetchRandomPokemon() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomPokemonId());
            const data = await response.json();
            displayPokemonInfo(data);
        } catch (error) {
            console.error('Error al obtener datos del Pokémon:', error);
        }
    }

    // Función para mostrar la información del Pokémon en el contenedor
    function displayPokemonInfo(pokemon) {
        pokemonInfoContainer.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Puntos de vida: 💖 ${pokemon.stats[0].base_stat}</p>
            <p>Tipo(s):🧪 ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Ataque:⚔️ ${pokemon.stats[1].base_stat}</p>
            <p>Defensa: 🛡️ ${pokemon.stats[2].base_stat}</p>
        `;
    }

    // Función para obtener un ID de Pokémon aleatorio (entre 1 y 898, que es el rango actual)
    function getRandomPokemonId() {
        return Math.floor(Math.random() * 898) + 1;
    }

    // Evento click para el botón "Cambiar Pokémon"
    changePokemonBtn.addEventListener('click', fetchRandomPokemon);

    // Cargar datos de un Pokémon al cargar la página
    fetchRandomPokemon();
});
