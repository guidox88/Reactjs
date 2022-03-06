
import React, { createContext , useState } from "react" ;

export const CarritoContext = createContext();

const CarritoProvedor = ({ children }) => {
    
    const [carrito,setCarrito] = useState([]);
   
        const agregarAlCarrito = (item) => {

            setCarrito ([...carrito,item])
        }
        
    




  return (
        <CarritoContext.Provider value= {{carrito,agregarAlCarrito }}>
                  {children}
        </CarritoContext.Provider>
        )
}

export default CarritoProvedor