
//------FUNCIÓN PARA FILTRAR POR DIRECTOR------

export const filterDirectorGhibli = (dataghibli, valor) =>{  
  
  
  const DirectoresGhibli= dataghibli.filter( directorGhibli=>(directorGhibli.director===valor ));
  console.log(DirectoresGhibli);
  return DirectoresGhibli;                                                               
  

}; 

//------FUNCIÓN PARA ORDENAR DATA POR SCORE-------

export const sortData= (dataghibli) =>{  

  //const orderDataScore= []

  let orderDataScore = dataghibli.sort(function (a, b) {

    if (parseInt(a.rt_score, 10) > parseInt(b.rt_score, 10)) {
      return 1;
    }
    if (parseInt(a.rt_score, 10) < parseInt(b.rt_score, 10)) {
      return -1;
    }
    return 0;
    });
    
    return  orderDataScore
    
  }
  
  console.log(sortData)


/* let pelishayao = dataghibli.filter(pelicula=> pelicula.director== "Hayao Miyazaki")
console.log(pelishayao); */


// estas funciones son de ejemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */

