
/*
getelementbyid
nos permiteobtener un elemento en base a su atributo id
*/

const contenedor1=document.getElementById('contenedor1');
console.log(contenedor1);



/*
children nos permite obtener los elementos  hijos
*/
console.log(contenedor1.children);


// parentElement:
// recorre el dom y nos da como un acceso directo hacia el elemento padre para poder acceder a el
const padre = boton.parentElement;