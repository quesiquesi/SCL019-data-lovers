import { filtrodirector } from './data.js' 
import data from './data/ghibli/ghibli.js';


const dataghibli = data.films 

 const containerposter = document.getElementById("poster")

  const displaydata = (dataghibli) =>{  

    poster.innerHTML = ''
  
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
       
      }  
      }  
    
       
      window.addEventListener('load',()=>{
         displaydata(dataghibli)
       })

        
 
//filtro según director que se muestre en html

/* const filtroghibli = document.getElementById('filterdirector');                 //se crea var, que llame desde el select creado, select que tiene 2 opciones
 
filtroghibli.addEventListener('change',()=>{                                        // evento que se dispara y usa los datos ligados a la opcion dando respuesta segun seleccion y que realice la sgte funcion 
    var selectedirector = filtroghibli.options[filtroghibli.selectedIndex].value;     // se crea var que tome las opciones desde la const aletasfiltro y segun  el valor seleccionado (F-M)
    console.log(selectedirector)

    let resultado = filtrodirector(directores,selectdirector)                              // se crea var resultado que tiliza la f de filtrar en los parametrso de la data y el valor de var creada em L41
    displaydata(resultado)                                                                  // se usa la funcion card para que nos cree el formado de var resultados 
    console.log(resultado)




 */






 const filtroghibli = document.getElementById('filterdirector');

filtroghibli.addEventListener('change',()=>{

var selectdirector = filtroghibli.options[filtroghibli.selectedIndex].value

console.log(selectdirector)

let resultado = filtrodirector (dataghibli, selectdirector)
displaydata(resultado)
console.log(resultado)
})
  





 
 /*  let pelishayao = dataghibli.filter(pelicula=> pelicula.director == "Hayao Miyazaki")
  console.log (pelishayao) */
  
 


