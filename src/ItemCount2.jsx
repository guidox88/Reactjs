import React, { useState, useContext } from "react" ;
import { CarritoContext } from '../Context/CarritoProvedor';
import Button from "./UI/Button";


const ItemCount =({ item,initial, stock, }) => {
     const [count, setCount] = useState(initial);

     const {dameUnaAlerta,agregarAlCarrito} = useContext(CarritoContext)
     
     const onAdd = () => {
         if (count < stock) {
             setCount(count + 1);
         }
     };
     
     const onReduce = () => {
         if (count > 1) {
             setCount (count - 1);
         }
     };

     return (
        <div className=" w-50  " >
            <div className="row">
                <div className="col col-4 d-flex justify-content-center">
                <Button onClick= {onAdd} className={"btn btn-primary btn-lg px-4"} text={"+"} />
                 </div>
                
                <div className="col col-4 d-flex justify-content-center fs-3">{count}</div>
                <div  className="col col-4 d-flex justify-content-center">
                <Button onClick= {onReduce} className={"btn btn-primary btn-lg px-4"} text={"-"} />
                </div>
            </div>
            <div>
               <Button onClick={()=>agregarAlCarrito(item)} className="btn btn-secondar w-75" text={"agregar al carrito"}  onClick={() => onAdd()} />
            </div>
        </div>
   )
};

export default ItemCount;

//export default function ItemCount ({ stock, initial}) 
