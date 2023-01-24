// sala de cine

var pelicula = prompt("digite el nombre de la pelicula: ");
var valorpeli = prompt("digite el valor de la entrada : ");
var cantidentra = prompt("digite la cantidad de entradas que quiere comprar: "); 

function mostrarpeli(){
    document.write(`<i>Lo pelicula que va a ver es : </i> ${pelicula}</br>`);
}

function mostrarvalorpeli(){
    document.write(`<i>El valor de la entrada es de : $ </i> ${valorpeli}<br>`);
}
function mostrarcantidentra(){
    document.write(`<i>La cantidad de entradas es de : </i> ${cantidentra}<br>`); 
}

function mostrartotalpagar(){
    total = valorpeli * cantidentra
    document.write(`<b><i>El total a pagar es de : $ </b> ${total}</i><br>`);
}

function mostrardescuento(){
    if (total >= 35000){
        descuento = total * 0.16; 
        document.write(`<b>El descuento es de : $ </b> ${descuento}<br>`);
    }else{
        document.write(`<u><u>No hay descuento!</u><br>`)
    }
}

function totalpagardesc (){
    totaldesc = total - descuento;
    document.write(`<b><i>El total a pagar con descuento es : $ </b> ${totaldesc}</i><br>`);

}


mostrarpeli ();
mostrarvalorpeli ();
mostrarcantidentra ();
mostrartotalpagar ();
mostrardescuento ();
totalpagardesc();