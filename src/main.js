//import { example } from './data.js';

import { filterDirectorGhibli, sortData } from './data.js';
import data from './data/ghibli/ghibli.js';

let dataghibli = data.films

const containerposter = document.getElementById("poster")

//-----LIMPIAR PÁGINA-----
const limpiarPagina = ()=>{
  containerposter.innerHTML = '';
}
//------ELEMENTOS DE LA PÁGINA--------

const card = (dataghibli) => {

  limpiarPagina ()

  for (let i = 0; i < dataghibli.length; i++) {


    let ficha = document.createElement("div");
    let imagen = document.createElement("img");
    let nombre = document.createElement("p");
    let puntaje = document.createElement("p");

    ficha.setAttribute("class", "fichita")
    imagen.setAttribute("src", dataghibli[i].poster);
    nombre.setAttribute("id", "tarjeta");
    puntaje.innerHTML = "Valoración RT: " + dataghibli[i].rt_score;
    nombre.innerHTML = dataghibli[i].title;

    ficha.appendChild(imagen);
    containerposter.appendChild(ficha);
    ficha.appendChild(nombre)
    ficha.appendChild(puntaje)



  }

}

//------EVENTO FILTRO DIRECTORES--------

const selectDirectores = document.getElementById('filterdirector');

selectDirectores.addEventListener('change', () => {
  var opcionDirector = selectDirectores.options[selectDirectores.selectedIndex].value;
  console.log(opcionDirector)

  let resultado = filterDirectorGhibli(dataghibli, opcionDirector)
  card(resultado)
  console.log(resultado)

})

//--------EVENTO ORDENAR POR SCORE---------

const selectScore = document.getElementById('filterScore');

selectScore.addEventListener('change', () => {
  var opcionScore = selectScore.options[selectScore.selectedIndex].value;
  let sorted = sortData(dataghibli,opcionScore)
  
  if(opcionScore ==="ascendente"){
    card(sorted);
  } 
  else if(opcionScore ==="descendente"){
    card(sorted.reverse());

  }
  //let orderRverse = order.reverse()
  //console.log(orderRverse)


})
//console.log(selectScore)




window.addEventListener('load', () => {
  card(dataghibli)
})





//function OrdenarScore() {
  
  /* let nuevoArray = [];
  
  for (let i = 0; i < dataghibli.length; i++) {

    let FilterScore = [dataghibli[i].rt_score]
    //console.log(FilterScore);
    var numero = FilterScore.map(i => Number(i));
    console.log(numero);
    var ArrayenString = numero.toString()
    console.log(ArrayenString);

    nuevoArray.push(dataghibli[i].rt_score);
    
  }
  console.log(nuevoArray); */
//}









/* function ordenarScore(numero) {

    for (let i = 0; i < numero.length - 1; i++) {

      for (let j = 0; j < numero.length - i - 1; j++) {

        if (numero[j] > numero[j + 1]) {

          [numero[j], numero[j + 1]] = [numero[j + 1], numero[j]];          //ALGORITMO BURBUJA PARA ORDENAR UN ARRAY NUMÉRICO
        }
      }
    }
  }

  let algoritmoBurbuja = ordenarScore(numero)
  console.log(algoritmoBurbuja); */






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

