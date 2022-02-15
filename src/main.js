import { filterDirectorGhibli, sortData, buscarTitulo } from './data.js';
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
    let directorr = document.createElement("p");

    ficha.setAttribute("class", "fichita")
    imagen.setAttribute("src", dataghibli[i].poster);
    nombre.setAttribute("id", "tarjeta");
    directorr.setAttribute("class")
    puntaje.innerHTML = "Valoración RT: " + dataghibli[i].rt_score;
    nombre.innerHTML = dataghibli[i].title;
    directorr.innerHTML = dataghibli[i].director;

    ficha.appendChild(imagen);
    containerposter.appendChild(ficha);
    ficha.appendChild(nombre)
    ficha.appendChild(directorr)
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



window.addEventListener('load', () => {
  card(dataghibli)
})


//console.log(selectScore)

//----------EVENTO BUSCADOR---------
const buscador = document.getElementById ("buscador")
buscador.addEventListener("keyup", (e) => {

let searchByTitle= e.target.value;
let searchFilm = buscarTitulo(searchByTitle, dataghibli);
console.log(searchFilm);
card(searchFilm)

});


