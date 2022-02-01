//import { example } from './data.js';
import data from './data/ghibli/ghibli.js'; 
const dataghibli = data.films


let pelishayao = dataghibli.filter(pelicula=> pelicula.director == "Hayao Miyazaki")
//console.log(pelishayao);

let selectDirector = document.querySelector(".filterdirector")
selectDirector.addEventListener('change', (event) => {
  const Seleccion = document.querySelector('.poster');
  Seleccion.innerHTML = pelishayao;
}

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

        console.log("holamundo");




/* for(let i=0;i<dataghibli.length;i++){
                    
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
  
}*/

