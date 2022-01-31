//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';


const dataghibli = data.films

const containerposter = document.getElementById("poster")

   for(let i=0;i<dataghibli.length;i++){
                        
            
     let ficha = document.createElement ("div");
       let imagen = document.createElement("img");
       let nombre = document.createElement("p");

            
        imagen.setAttribute("src",dataghibli[i].poster);
        nombre.setAttribute("id", "tarjeta");
        ficha.setAttribute ("class", "fichita")
        nombre.innerHTML = dataghibli[i].title;

       ficha.appendChild (imagen);
        containerposter.appendChild(ficha);
        ficha.appendChild (nombre)
        //poster.appendChild (leyenda)
           
        
        }