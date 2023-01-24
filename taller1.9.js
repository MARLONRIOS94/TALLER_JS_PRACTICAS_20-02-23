//variables string
var nombre = "Isabella"
var apellido = "Montealegre Gonzalez"
var edad = 15

console.log ("Hola " + nombre + " " + apellido)
console.log ("Tengo" + edad + " " + "años")

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primeraLetraDelNombre = nombre.charAt(0)
var cantidadLetrasDelNombre = nombre.length
var nombreCompleto = '${nombre} ${apellido}'
var nombreCompleto = '${nombre} ${apellido.toUpperCase()}'
var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,2)


//variables numeros
var edad1 = 40
edad1 = edad1 + 1
edad1 +=1

var peso = 75
peso= peso-2
peso -=2

var sandwich = 1
peso = peso + sandwich
var JugarAlFutbol = 3
peso -= 


//decimales
var PrecioVino = 200.3
total = PrecioVino * 3
var total = Math.round (PrecioVino*100*3)/100
var totalStr = total.toFixed(2)
var total2 = parseFloat (totalStr)


//funciones
var nombre = "Isabella"
var edad = 15;

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad();

//colocarle parámetros a una función
function imprimirEdadConParametros(n,e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdadConParametros(nombre,edad)
imprimirEdadConParametros('Isabella',15);
imprimirEdadConParametros('Daniel',10);
imprimirEdadConParametros('David',45);


function imprimirNombreMayuscula () {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMayuscula();