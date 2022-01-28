//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//let dataghibli = data.films;
//const posterpelicula = document.getElementById("posterfilms")

//despligue de posters
//let displayposter = document.getElementById ("posterfilms");

  /*   document.getElementById("filtervaloracion").addEventListener("click",() => {
        for (let i = 0; i < dataghibli.length; i++) {
            console.log(dataghibli[i].id);

            let imagenpelicula = document.createElement('img')
            imagenpelicula.appendChild(dataghibli[i].id);
        }
 */
        

        // console.log(data.films);

        let dataghibli = data.films;
        //let posterpelicula = data.films
        /* let displayposter = document.getElementById ("posterfilms");
        

        for (let i=0; i <dataghibli.length; i++) {
            let pelicula = document.createElement("div")
            let imagenpelicula = document.createElement("img");

            
            imagenpelicula.setAttribute("src" posterpelicula[i].imagenpelicula);
            displayposter.appendChild (pelicula);
           displayposter.appendChild (imagenpelicula);

        }
 */
        
        for(let i=0;i<dataghibli.length;i++){
            
            
            //document.getElementById("poster").innerHTML+=dataghibli[i].poster
            let ficha = document.createElement ("flexbox")
            let imagen = document.createElement("img");
            //let leyenda = document.createElement("p")

            
            imagen.setAttribute("src",dataghibli[i].poster);
            poster.appendChild (imagen)
            poster.appendChild(ficha)
            //poster.appendChild (leyenda)
           // leyenda.innerHTML="dataghibli[i].title"
            //imagenpelicula.setAttribute("src" dataghibli[i].poster);
            
          }