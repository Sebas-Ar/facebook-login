/* console.log('hola mundo') */
/* alert('hola mundo') */

/* tipos variables */

/* strings */

/* var nombre = 'sebastian' */
let nombre = 'sebastian'
let apellido = "arias"
let nombreCompletoCopy = 'juan ' + nombre + ' ' + apellido + ' duarte'
let nombreCompleto = `juan ${nombre} ${apellido} duarte`

/* console.log(nombre, apellido) */

/* console.log(nombreCompletoCopy)
console.log(nombreCompleto) */

/* numero */
/* enteros */
let edad = 21

/* decimales */
let pi = 3.14 + 1

/* console.log(pi) */

/* estructuras de datos */

/* array / listas / vectores */
/* camelcase */
/* let listaDeNumeros = [1, 2, 3, 4, [5, 6, 7]] */

/* console.log(listaDeNumeros[4][1]) */

/* objetos - JSON */
/* clave -> valor */
let usuario = {
nombre: 'sebas',
apellido: 'arias',
edad: 21,
ubicacion: {
    latitud: 4578945,
    longitud: 534878942,
}

}

/* console.log(usuario.ubicacion.latitud) */


/* boolean */

let verdader = true
let falso = false

/* unidefind */

let variableSinNada;

/* null */

let variableVacias = null

/* consicionales */

/* igual -> === */
/* diferente -> !== */
/* mayor -> > */
/* mayor o igual -> >= */
/* menor -> < */
/* menor o igual -> <= */

/* and -> && */
/* or -> || */

if ((1 === 3) || ( 2 === 3 )) {
    /* console.log('es verdadero') */
} else {
    /* console.log('es falso') */
}

/* bucles */

let condicion = 0

while (condicion < 10) {
    /* console.log('hola ' + condicion) */
    /* condicion = condicion + 1 */
    condicion++
}

for (let i = 0; i < 10; i++ ) {
    /* console.log('hola desde el for en el ciclo: ' + i) */
}

let listaDeNumeros = [1, 2, 3, 4, [5, 6, 7]]

/* console.log(listaDeNumeros.length) */

/* for (let i = 0; i < listaDeNumeros.length ; i++) {
    console.log(listaDeNumeros[i])
} */

/* listaDeNumeros.forEach((value, index, array) => {
    console.log(array)
}) */
