function suma(num1, num2) {
    alert("La suma es: " + (num1 + num2));
}

function resta(num1, num2) {
    alert("La resta es: " + (num1 - num2));
}

function multiplica(num1, num2) {
    alert("La multiplicacion es: " + (num1 * num2));
}

function dividir(num1, num2) {
    alert("La división es: " + (num1 / num2));
}

var operacion = prompt("¿Que operación deseas realizar?");
var operador1 = parseInt(prompt("Introduce el primer n°"));
var operador2 = parseInt(prompt("Introduce el segundo n°"));

if(operacion == "sumar"){
    suma(operador1,operador2);
}
else if(operacion == "restar"){
    resta(operador1,operador2)
}
else if(operacion == "multiplicar"){
    multiplica(operador1,operador2)
}
else if(operacion == "dividir"){
    dividir(operador1,operador2)
}
else{
    alert("Lo siento. Operacion no contemplada");
}