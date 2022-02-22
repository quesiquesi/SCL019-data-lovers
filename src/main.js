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
    

    containerposter.appendChild(ficha);
    ficha.appendChild(imagen);
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
<<<<<<< HEAD
  var opcionDirector = selectDirectores.value;
  console.log(opcionDirector)

=======
  //var opcionDirector = selectDirectores.options[selectDirectores.selectedIndex].value;
  var opcionDirector = selectDirectores.value;
>>>>>>> 38518ebe1d60b7621b852b863ed7150c5927983b
  let resultado = filterDirectorGhibli(dataghibli, opcionDirector)
  card(resultado)
  
})



//--------EVENTO ORDENAR POR SCORE---------

const selectScore = document.getElementById('filterScore');

selectScore.addEventListener('change', () => {
<<<<<<< HEAD
=======
  //var opcionScore = selectScore.options[selectScore.selectedIndex].value;
>>>>>>> 38518ebe1d60b7621b852b863ed7150c5927983b
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
<<<<<<< HEAD
buscador.addEventListener("keyup", (evento) => {
=======
buscador.addEventListener("keyup",(e) => {
>>>>>>> 38518ebe1d60b7621b852b863ed7150c5927983b

  let searchByTitle = evento.target.value;
  let searchfilm = buscarTitulo (searchByTitle,dataghibli)
  card(searchfilm)
})

