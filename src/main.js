//import { example } from './data.js';

import { filterDirectorGhibli } from './data.js';
import data from './data/ghibli/ghibli.js';

const dataghibli = data.films



const containerposter = document.getElementById("poster")


const card = (dataghibli) => {

  containerposter.innerHTML = ''; 

  for (let i = 0; i < dataghibli.length; i++) {


    let ficha = document.createElement("div");
    let imagen = document.createElement("img");
    let nombre = document.createElement("p");


    imagen.setAttribute("src", dataghibli[i].poster);
    nombre.setAttribute("id", "tarjeta");
    ficha.setAttribute("class", "fichita")
    nombre.innerHTML = dataghibli[i].title;

    ficha.appendChild(imagen);
    containerposter.appendChild(ficha);
    ficha.appendChild(nombre)
    //poster.appendChild (leyenda)


  }

}

const selectDirectores = document.getElementById('filterdirector');                 //se crea var, que llame desde el select creado, select que tiene 2 opciones

 selectDirectores.addEventListener('change', () => {                                        // evento que se dispara y usa los datos ligados a la opcion dando respuesta segun seleccion y que realice la sgte funcion 
  var opcionDirector = selectDirectores.options[selectDirectores.selectedIndex].value;     // se crea var que tome las opciones desde la const aletasfiltro y segun  el valor seleccionado (F-M)
  console.log(opcionDirector)

  let resultado = filterDirectorGhibli(dataghibli, opcionDirector)                              // se crea var resultado que tiliza la f de filtrar en los parametrso de la data y el valor de var creada em L41
  card(resultado)                                                                  // se usa la funcion card para que nos cree el formado de var resultados 
  console.log(resultado)

}) 


 window.addEventListener('load',()=>{                     // Evento que al abrir nuestra pagina aparezcan las card(tarjetas con nombre de atletas)
  card(dataghibli)
})
 

for (let i = 0; i < dataghibli.length; i++) {
  
  let FilterScore = dataghibli[i].rt_score
  
  console.log(FilterScore);
  
  
 
}

/* 
for(let i=0;i<dataghibli.length;i++){
                    
  //document.getElementById("poster").innerHTML+=dataghibli[i].poster
  let ficha = document.createElement ("flexbox");
  let imagen = document.createElement("img");
  let leyenda = document.createElement("p");
  
  let titulo= document.createTextNode (dataghibli[i].title);
  

  imagen.setAttribute("src",dataghibli[i].poster);
  //titulo.setAttribute ("style");
  
  poster.appendChild(ficha)
  poster.appendChild (imagen)
  poster.appendChild(titulo)
  
} */

