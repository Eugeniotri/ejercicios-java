function capital(cadena){
    return cadena.charAt(0).toUpperCase() +cadena.slice(1);
}
console.log(capital("holacaracola,papa"));

//charAt(0 )es la posicion de la cadena 0 ,cadena.slice(1) es el resto de la cadena desde la posicion 1