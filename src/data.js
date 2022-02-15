
//------FUNCIÓN PARA FILTRAR POR DIRECTOR------

export const filterDirectorGhibli = (dataghibli, valor) =>{  
  
  const DirectoresGhibli= dataghibli.filter( directorGhibli=>(directorGhibli.director===valor ));
  
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

  //--------FUNCIÓN PARA BUSCAR POR NOMBRE DE PELICULA-----

  export const buscarTitulo = (searchByTitle, titulo) => {
    let searchTitle = (titulo) =>titulo.title.toLowerCase().includes(searchByTitle.toLowerCase());
    let searchSearch = titulo.filter(searchTitle);
    return searchSearch;
    
  }