//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
let dataghibli = data.films;

<<<<<<< HEAD

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
=======
for(let i=0;i<dataghibli.length;i++){
                    
  //document.getElementById("poster").innerHTML+=dataghibli[i].poster
  let ficha = document.createElement ("flexbox")
  let imagen = document.createElement("img");
  let leyenda = document.createElement("p")

  imagen.setAttribute("src",dataghibli[i].poster);
  poster.appendChild (imagen)
  poster.appendChild(ficha)
}

>>>>>>> ed9c5d1cb980dbaf9de934f903b50431dbf60ad9
