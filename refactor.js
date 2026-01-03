/*
const NumerosInpares=[];
const NumerosPares=[];
const limite=Number(prompt("ingrese un numero limite"));
const numero1=Number(prompt("ingrese un numero"));
const esNumeroPar = (numero) => numero % 2 === 0;
if (esNumeroPar(numero1)) {
   console.log(`el numero ${numero1} es par `);
} else {
    console.log(`el numero ${numero1} es impar `);
} // numero par o impar ejercicio


function RecorrerHasta(num) {
    for(let i=0; i<= num;i++){
      if(esNumeroPar(i)){
        GuardaeNumeroPar(i);
    }else{
        GuardaeNumeroInpar(i);
    }}
}



function GuardaeNumeroPar(num){
    NumerosPares.push(num);
};

function GuardaeNumeroInpar(num){
    NumerosInpares.push(num);
}
    

RecorrerHasta(limite);

console.log(`los numeros pares son:`)
console.log(NumerosPares);


console.log(`los numeros pares son:`)
console.log(NumerosInpares);

const numero=Number(prompt("ingrese un numero para saber si es primo"));

//ejercicio numeros primos
/**
 * Para determinar que un numero es primo, este solo debe ser divisible por 1 y por si mismo.
 * en esta funcion lo que vamos a hacer es determinar si el numero ingresado por parametro tiene mas de un divisor si esta afirmacion es cierta el numero no es primo
 * @param {*} numero 
 
function esNumeroPrimo(numero) {
    debugger;
    if(numero<1){return false;

  }

  let RaizCuadrada=Math.sqrt(numero);
  for(let i=2;i<=RaizCuadrada;i++){
    if(numero%i===0){
        return false;
    }}
    return true;
};
console.log(`el numero ${numero} es primo? : ${esNumeroPrimo(numero)}`);

*/
