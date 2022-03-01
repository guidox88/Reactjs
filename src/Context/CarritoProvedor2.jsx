
import React, { createContext , useState } from "react" ;

export const CarritoContext = createContext();

const CarritoProvedor = ({ children }) => {

    const [carrito,setCarrito] = useState([]);

   // addItem (item,cantidad)  //adentro  antes agregar utilizar metodo isInCart , en el caso que no exista, agregar al carrito

  //  removeItem (id) 

  //  clear () //poner el carrito [] en vacio , deberia borrar los productos de carrito

  //  isInCart (id) // si el id del parametro existe en carrito me deberia dar true e caso contrario false

  return (
        <CarritoContext.Provider value= {{nombre,apellido,edad,localidad,dameUnaAlerta,agregarAlCarrito,carrito }}>
                  {children}
        </CarritoContext.Provider>
        )
}

export default CarritoProvedor