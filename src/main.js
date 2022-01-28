//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
const dataghibli = data.films
document.getElementById("filterdirector").addEventListener("click",()=>{


  for(let i = 0; i<dataghibli.length; i++){
      console.log(dataghibli[i].id);
  }

   // console.log(data.films);

})


