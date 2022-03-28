
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokeAPI = async (pokename) => {
    const url = API_URL + pokename;
    const resp = await fetch(url);
    const data = await resp.json();
    
    return data;
}

const buscar = async () => {
    const pokeName = document.getElementById("pokemon").value ? document.getElementById("pokemon").value : 'pikachu';    
    console.log(pokeName);
    const data = await fetchPokeAPI(pokeName);
    console.log(data);
    estadistiticas(data)
    imagenPokedex(data.sprites.front_default)
    let movimiento = data.moves.map(move => move.move.name + '\n');
    console.log(movimiento)
    document.getElementById("info_pokemon").innerHTML = movimiento; 
}

const estadistiticas = ( data) => {
    
    const id = data.id;
    const nombre = data.name.toUpperCase();
    const hp = data.stats[0].base_stat;
    const atk = data.stats[1].base_stat;
    const def = data.stats[2].base_stat;
    const sp_atk = data.stats[3].base_stat;
    const sp_def = data.stats[4].base_stat;
    const vel = data.stats[5].base_stat;
    const hei = data.height;
    const wei = data.weight;   
        
    var pokemon = document.getElementById("nombre");
    var vida = document.getElementById("vida");
    var ataque = document.getElementById("ataque");
    var ataque_especial = document.getElementById("a_especial");
    var defensa_especial = document.getElementById("d_especial");
    var velocidad = document.getElementById("velocidad");
    var altura = document.getElementById("altura");
    var peso = document.getElementById("peso");

    pokemon.innerHTML = (nombre + " \t-\t " + id);
    vida.innerHTML = (hp + " HP");
    ataque.innerHTML = (atk + " ATK");
    ataque_especial.innerHTML = (sp_atk + " SP. ATK");
    defensa_especial.innerHTML = (sp_def + " SP. DEF");
    velocidad.innerHTML = (vel + " VEL");
    altura.innerHTML = (hei + " m");
    peso.innerHTML = (wei + " kg");
}

const imagenPokedex = (url) => {
    document.getElementById("imagen_pokemon").src = url;
}

buscar();