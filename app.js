//variables
let intentos = 0;
let numeroSecreto = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
    console.log(listaNumeroSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los valores posibles')
    } else {
        //si el numero genearado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {//si el numero generado no esta incluido en la lista
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", 'Juego del numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log('El numero secreto es: ', numeroSecreto);
    intentos = 1;
}
condicionesIniciales();


function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //fallo el intento
        if (numeroDeUsuario > numeroSecreto) {//el usuario no acerto
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        limpiarCaja();
    }
    intentos++;

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';//funciona como el getElementById pero usando el query
}


function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar msj de intervalo de numeros
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
