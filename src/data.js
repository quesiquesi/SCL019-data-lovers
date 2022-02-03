export const filterDirectorGhibli = (dataghibli, valor) =>{                                               // se crea la const filtrarm y funcion con 2 parametros 
  const DirectoresGhibli= dataghibli.filter( directorGhibli=>(directorGhibli.director===valor ));
  console.log(DirectoresGhibli);
  return DirectoresGhibli;                                                                // que la funcion nos devuelva lo pedido en la var mujeresMedallistas
  
}; 

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

