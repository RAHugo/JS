/* Ejercicio 1
    Parte 1
*/
let idAlert = document.getElementById("idAlert"); 
let nombres = ["Sofia","David","Juan"];
console.log(nombres);

/* Parte 2 */
nombres.shift();
console.log(nombres);
nombres.push("Sara","Augustin");
console.log(nombres);

/* Parte 3 */
nombres.slice(1,0,"Renata");
console.log(nombres);
nombres.push("Elena");

for(let index = 0; index<nombres.length; index++){
    console.log(nombres[index]);
}

idAlert.innerHTML = nombres.length + " son el número de personas formadas";

idAlert.innerHTML += "<ol><li>"+ nombres[0] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ nombres[1] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ nombres[2] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ nombres[3] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ nombres[4] + "</li></ol>"; /* Se pone += para que vaya ponidendo más texto */




/* Ejercicio 2 */
let idAlert2 = document.getElementById("idAlert2"); 
let arbol = [];
let contArbol = "*";

for(i = 0; i<5; i +=1){
  arbol[i] = contArbol;
  contArbol += "*";
  console.log(arbol[i]);
}

idAlert2.innerHTML += "<ol><li>"+ arbol[0] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ arbol[1] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ arbol[2] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ arbol[3] + "</li>" /* Se pone += para que vaya ponidendo más texto */
+ "<li>"+ arbol[4] + "</li></ol>"; /* Se pone += para que vaya ponidendo más texto */



/* Ejercicio 3 */
/* Parte uno */

let btnCalcular1 = document.getElementById("btnCalcular1");
let number1 = document.getElementById("numero1");
btnCalcular1.addEventListener("click", function(event){
  event.preventDefault();
/* Declaraciones de variables para la función */
  let num1 = parseInt(number1.value);
  while(num1 > 0){
    console.log(num1);
    num1 -= 0.5;
  }
});

/* Segunda Parte */

let btnCalcular2 = document.getElementById("btnCalcular2");
btnCalcular2.addEventListener("click", function(event){
  event.preventDefault();
/* Declaraciones de variables para la función */
  let cont2 = 1
  while(cont2 < 51){
    console.log((cont2*2)-1);
    cont2 ++;
  }
});

/* Tercera Parte */
let btnCalcular3 = document.getElementById("btnCalcular3");
let number3 = document.getElementById("numero3");
btnCalcular3.addEventListener("click", function(event){
  event.preventDefault();
/* Declaraciones de variables para la función */
  let cont3 = parseInt(number3.value); /* Número que se quiere llegar */
  let num3 = 1 /* Inicio del conteo y donde iniciara la impresión de la consola */
  while(num3 <= cont3 ){
    console.log(`[${num3}]`);
    num3 ++;
  }
});

/* Cuarta Parte */
/* Tercera Parte */
let btnCalcular4 = document.getElementById("btnCalcular4");
let number4 = document.getElementById("numero4");
let resultadoSuma = document.getElementById("resultadoSuma");
btnCalcular4.addEventListener("click", function(event){
  event.preventDefault();
/* Declaraciones de variables para la función */
  let num4 = parseInt(number4.value);
  let suma = 0;
  let cont4 = 1;
  while(cont4 <= num4){
    suma += cont4;
    cont4++;
  }
  resultadoSuma.innerHTML = "La suma es: "+suma;
});

