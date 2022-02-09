import { useState } from "react"

export default function ItemCount ({ stock, initial}) {

const [itemCount, SetItemCount] = useState (1)

const add = () => {
    SetItemCount(itemCount + 1)
}
const rest = () => {
    SetItemCount(itemCount - 1)
}
const onAdd = () => {
    alert(itemCount)
}

return (
     <div className="divContador" >
         <div className="divBtnAddSubst">
             <button className="btnDismin" onClick={() => rest()} disable={itemCount === stock ? true : false } >-</button>
             <span className="spanCtnNumber">{itemCount}</span>
             <button className="btnAument" onClick={() => add()} disable={itemCount === initial ? true : false } >+</button>
         </div>
         <div>
            <button className="btnAddtocart" onClick={() => onAdd()}>Añadir al carrito</button>
         </div>
     </div>
)

};