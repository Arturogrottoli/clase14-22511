//Operadores

let numero1 = 4;
let numero2 = "4";

console.log(numero1===numero2);

console.log(numero1!==numero2)

//opoerador posfijo

let numero3 = 10;

console.log(numero3)

numero3++;    //numero3 = numero3+1

console.log(numero3)

//operador de asignacion

numero3+=numero1      //numero3 = numero1 + numero3

console.log(numero3)

//estructuras de control condicionales

let nota = Number.parseInt(prompt("Ingrese su nota:"))

console.log("Su nota fue:",nota)

if(nota>10||nota<0){
    console.log("Ingrese un numero entre 0 y 10")
}else if(nota>=4){
    console.log("Felicitaciones, estas aprobado!")
}else{
    console.error("Desaprobado!")
}   


//Estructura de control While

let i = 0;

while(i<5){
    console.log("Imprimir un mensaje repetido")
    i++;      //i=i+1
}

i=0;

while(i<5){
    console.log("Valor de i en esta iteracion:", i)
    i++;      //i=i+1
}

//mismos bucles pero con un for

for(let x=0; x<5; x++){
    console.log("Valor de x en esta iteracion:", x)
}






