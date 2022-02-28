import React from 'react';
import { createContext } from 'react'

export const CarritoContext = createContext();

const CarritoProvedor = ({ children }) => {
 
    //se guarda todo lo que quiera aca
// variables 
    let nombre = "Guido"
    let apellido ="Negrisoli"
    let edad = 33
    let localidad ="Buenos Aires"
// funciones 
const dameUnaAlerta = (texto) => {
    alert(texto);
};
  return (
        <CarritoContext.Provider value= {{nombre,apellido,edad,localidad,dameUnaAlerta}}>
                  {children}
        </CarritoContext.Provider>
        )
}

export default CarritoProvedor