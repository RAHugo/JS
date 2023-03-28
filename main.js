/* Ejercicio 1
    Parte 1
*/
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


/* Ejercicio 2 */

let arbol = [];
let contArbol = "*";

for(i = 0; i<5; i +=1){
  arbol[i] = contArbol;
  contArbol += "*";
  console.log(arbol[i]);
}


/* Ejercicio 3 */
