let peliculasAccion = ['End Game', 'Iron Man 3', 'Capitan America'];
let peliculasComedia = ['Mi pobre angelito', '¿Que paso ayer?']

let peliculas = [...peliculasAccion, ...peliculasComedia];

console.log(peliculas);

let generoComedias = {
    nombreGenero : 'Comedia',
    popularidad : 3 
};

let miProbreAngelito = {
    nombre : 'Mi pobre angelito',
    duracion : 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre : 'Que paso ayer',
    duracion : 110,
    ...generoComedias
}

console.log(miProbreAngelito);
console.log(quePasoAyer);

function peliculaVistas(...nombresDePeliculas){
    for(let i = 0; i < nombresDePeliculas.length; i++){
        console.log('La persona ya vio ' + nombresDePeliculas[i]);
    }
}

peliculaVistas('End Game', 'Iron Man 3', 'Mi pobre angelito', 'Capitan America');