import { buscarTitulo, filterDirectorGhibli, sortData } from './data.js';
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
    let directorr = document.createElement("p")

    ficha.setAttribute("class", "fichita")
    imagen.setAttribute("src", dataghibli[i].poster);
    nombre.setAttribute("id", "tarjeta");
    
    puntaje.innerHTML = "Valoración RT: " + dataghibli[i].rt_score;
    nombre.innerHTML = dataghibli[i].title;
    directorr.innerHTML = "Director: "+ dataghibli[i].director;

    ficha.appendChild(imagen);
    containerposter.appendChild(ficha);
    ficha.appendChild(nombre)
    ficha.appendChild(directorr)
    ficha.appendChild(puntaje)
    
  }

}
window.addEventListener('load', () => {
  card(dataghibli)
})


//------EVENTO FILTRO DIRECTORES--------

const selectDirectores = document.getElementById('filterdirector');

selectDirectores.addEventListener('change', () => {
  var opcionDirector = selectDirectores.value;
  console.log(opcionDirector)

  let resultado = filterDirectorGhibli(dataghibli, opcionDirector)
  card(resultado)
  console.log(resultado)

})

//--------EVENTO ORDENAR POR SCORE---------

const selectScore = document.getElementById('filterScore');

selectScore.addEventListener('change', () => {
  var opcionScore = selectScore.value;
  let sorted = sortData(dataghibli,opcionScore)
  
  if(opcionScore ==="ascendente"){
    card(sorted);
  } 
  else if(opcionScore ==="descendente"){
    card(sorted.reverse());

  }
})

//----------EVENTO BUSCADOR---------
const buscador = document.getElementById ("buscador")
buscador.addEventListener("keyup", (evento) => {

  let searchByTitle = evento.target.value;
  let searchfilm = buscarTitulo (searchByTitle,dataghibli)
  console.log(searchfilm)
  card(searchfilm)
})

