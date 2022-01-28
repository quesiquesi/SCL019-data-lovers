//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
let dataghibli = data.films;

for(let i=0;i<dataghibli.length;i++){
                    
  //document.getElementById("poster").innerHTML+=dataghibli[i].poster
  let ficha = document.createElement ("flexbox")
  let imagen = document.createElement("img");
  let leyenda = document.createElement("p")

  imagen.setAttribute("src",dataghibli[i].poster);
  poster.appendChild (imagen)
  poster.appendChild(ficha)
}

