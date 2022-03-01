import React, { useState, useContext } from "react" ; 
import { CarritoContext } from '../Context/CarritoProvedor';


export default function ItemCount ({ item,stock,initial}) {
    const [itemCount, setItemCount] = useState (initial);

const {agregarAlCarrito} = useContext(CarritoContext)

const add = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
}
const rest = () => {
    if (itemCount > 1) {
        setItemCount (itemCount - 1);
    }
};

const onAdd = () => {
    alert(itemCount)
    console.log (itemCount)
}

return (
     <div className="divContador  text-center " >
         <div className="divBtnAddSubst">
             <button className="btnDismin mx-3" onClick={() => rest()} disabled={itemCount === initial ? true : false } > - </button>
             <span className="spanCtnNumber mx-3">{itemCount}</span>
             <button className="btnAument mx-3" onClick={() => add()} disabled={itemCount === stock ? true : false } > + </button>
         </div>
         <div>
            <button onClick={()=>agregarAlCarrito(item)} >Añadir al carrito</button>
         </div>
         <div >
             <button onClick={() => onAdd()} > Alert</button>
         </div>
     </div>
)

};