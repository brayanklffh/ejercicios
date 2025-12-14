

const Numeroprimo=3;

const guardarNumero=numero=> `el numero ingresado es ${numero}`;

if(Numeroprimo%1===Numeroprimo&&Numeroprimo%Numeroprimo===1){

    console.log(guardarNumero(Numeroprimo)+ " es un numero primo")

}else{

    console.log(guardarNumero(Numeroprimo)+ " no es un numero primo")
}

for (let i = 1; i <= 1000; i++) {

    if (i % 2 === 0) {
        console.log(i + " es un número par.");
        
    } else {
        
        console.log(i + " es un número impar.");
    }
}