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
     <div className="divContador  text-center " >
         <div className="divBtnAddSubst">
             <button className="btnDismin mx-3" onClick={() => rest()} disable={itemCount === stock ? true : false } > - </button>
             <span className="spanCtnNumber mx-3">{itemCount}</span>
             <button className="btnAument mx-3" onClick={() => add()} disable={itemCount === initial ? true : false } > + </button>
         </div>
         <div>
            <button className="btnAddtocart" onClick={() => onAdd()}>Añadir al carrito</button>
         </div>
     </div>
)

};