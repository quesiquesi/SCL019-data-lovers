import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {filterDirectorGhibli, sortData, buscarTitulo} from '../src/data.js';

//data para probar los test:
const datadatadata = [
  {
    "title": "My Neighbor Totoro", 
      "director": "Hayao Miyazaki",
      "rt_score": "93",
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "rt_score": "97",
  },
]
//TEST FILTRADO POR DIRECTOR

describe('filterDirectorGhibli', () => {
  it('es una función', () => {
    expect(typeof filterDirectorGhibli).toBe('function');
  });

   it('Debería retornar para el director Hayao Miyazaki la película [My Neighbor Totoro]', () => {
   let directordata = filterDirectorGhibli(datadatadata, "Hayao Miyazaki");
   console.log(directordata)
    expect(directordata[0].title).toBe("My Neighbor Totoro");
  }); 

  it ('Debería retornar el director seleccionado Hayao Miyazaki', () =>{
    let directordata = filterDirectorGhibli(datadatadata, "Hayao Miyazaki");
    expect(directordata[0].director).toBe("Hayao Miyazaki");
  })
})
//TEST SORT POR VALORACIÓN
describe('sortData', () =>{
  it('es una función', ()=>{
    expect(typeof sortData).toBe('function')
  })
  it('Debería retornar las películas en orden ascendente [Grave of the Fireflies],[My Neighbor Totoro]', () =>{
    let valoraciondata = sortData (datadatadata)
  expect(valoraciondata[1].title).toBe('Grave of the Fireflies')
  expect(valoraciondata[0].title).toBe('My Neighbor Totoro')
  })
})

//TEST BARRA BUSCADORA

describe('buscarTitulo', () =>{
  it('es una función',()=>{
    expect(typeof buscarTitulo).toBe('function')
  })
  it('return `My Neighbor Totoro`', () => {
    expect(buscarTitulo("My Neighbor Totoro", datadatadata)).toEqual([
      {"title": "My Neighbor Totoro", "director": "Hayao Miyazaki", "rt_score": "93"}]);
  })
  
})


/* it('Debería retornar el título de la película que coincida con lo tipeado en el buscador[My Neighbor Totoro]', () =>{
  let buscadordata = buscarTitulo(datadatadata,"My Neighbor Totoro")
  expect(buscadordata[0].title).toEqual('My Neighbor Totoro') */
