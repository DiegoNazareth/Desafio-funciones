//1 Crear una función que muestre "¡Hola, mundo!" en la consola.

//Declarando funcion
function mensajeBienvenida(){
    console.log("Hola Mundo");
}
//mandando llamar funcion
mensajeBienvenida();

//2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
//variable
let nombre="Diego";
//Declarando funcion
function saludoAUsuario(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
//mandando llamar la funcion
saludoAUsuario(nombre);

//3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
//Declaracion de variable 
let numero=5;
//Declarando la funcion
function dobleDeNumero(numero){
    return console.log(numero+numero) ;
}
//mandando llamar la funcion
dobleDeNumero(numero);

//4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
//Declaracion de variables
let numero1=3, numero2=4, numero3=5;

//Declaracion de funcion
function promedioDeTresNumeros(numero1, numero2, numer3){
    return console.log((numero1+numero2+numero3)/3)
}
//Llamado de la funcion
promedioDeTresNumeros(numero1, numero2, numero3);

//5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
//Declaracion de variables
let numero1_1=9,numero2_2=33;
//declaracion de funcion
function comparacionDeNumeros(primer, segundo){
    if (primer>segundo){
        return console.log(`Numero ${primer} es el mayor`);
    }else{
        return console.log(`Numero ${segundo} es el mayor`);
    }
}
//Llamado de la funcion
comparacionDeNumeros(numero1_1, numero2_2);

//6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
//Declaracion de variables
let numeromulti=8;
//Declaracion de fucion
function multplicacionMismoNumero(numero){
    return console.log(numero*numero);
}
//Llamado de la funcion
multplicacionMismoNumero(numeromulti);




