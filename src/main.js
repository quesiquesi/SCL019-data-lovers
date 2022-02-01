//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
let dataghibli = data.films;

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
 
}



let filterDirector = dataghibli.filter( directores =>"director"=="Hayao Miyazaki", filterDirector)
console.log=(filterDirector);

