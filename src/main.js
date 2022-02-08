//import { example } from './data.js';

import { filterDirectorGhibli, sortData } from './data.js';
import data from './data/ghibli/ghibli.js';

let dataghibli = data.films

const containerposter = document.getElementById("poster")

//------ELEMENTOS DE LA PÁGINA--------

const card = (dataghibli) => {

  containerposter.innerHTML = '';

  for (let i = 0; i < dataghibli.length; i++) {


    let ficha = document.createElement("div");
    let imagen = document.createElement("img");
    let nombre = document.createElement("p");

    ficha.setAttribute("class", "fichita")
    imagen.setAttribute("src", dataghibli[i].poster);
    nombre.setAttribute("id", "tarjeta");

    nombre.innerHTML = dataghibli[i].title;

    ficha.appendChild(imagen);
    containerposter.appendChild(ficha);
    ficha.appendChild(nombre)



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
  let order= sortData(dataghibli,opcionScore)
  console.log(order)
  //console.log(order.reverse())


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

