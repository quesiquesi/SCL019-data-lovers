// estas funciones son de ejemplo
/* 
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

export const filtrodirector = (data, valor) =>{
const directoresghibli = data.filter(eldirector =>(eldirector.director===valor))
return directoresghibli
}