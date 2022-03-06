import React, { useState, useContext } from "react" ; 
import { CarritoContext } from '../Context/CarritoProvedor';


export default function ItemCount ({ item,stock,initial}) {
    const [itemCount, setItemCount] = useState (initial);
    const [first,setfirst] = useState(false);
    const {agregarAlCarrito} = useContext(CarritoContext)

const onadd = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
}
const onReduce = () => {
    if (itemCount > 1) {
        setItemCount (itemCount - 1);
    }
};

const onAddItem = () => {
    setfirst(true);
    agregarAlCarrito(item);
    alert(itemCount)
    console.log (item)
}

return (
     <div className="divContador  text-center " >
         <div className="divBtnAddSubst">
             <button className="btnDismin mx-3" onClick={() => onReduce()} disabled={itemCount === initial ? true : false } > - </button>
             <span className="spanCtnNumber mx-3">{itemCount}</span>
             <button className="btnAument mx-3" onClick={() => onadd()} disabled={itemCount === stock ? true : false } > + </button>
         </div>
         <div>
            <button onClick={()=>agregarAlCarrito(item)} >Añadir al carrito</button>
         </div>
         <div >
             <button onClick={() => onAddItem()} > Alert</button>
         </div>
     </div>
)

};