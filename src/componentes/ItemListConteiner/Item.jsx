
import React, { memo } from 'react';
import { Link } from 'react-router-dom';


const Item = memo(({item}) => {

    return <div className= "Card text-center ">
     <div className=" w-50 border border-dark m-1 ">
        <h1>Producto:{item.id}</h1>
        <img className='w-25' src={item.img} alt="" />
        <p>Nombre:{item.nombre}</p>
        <p>Stock:{item.stock}</p>
        <h4>Precio:${item.precio}</h4>
        <Link to={`/item/${item.id}`} >Ver mas detalle</Link>
        <p></p>
       
        </div>
    </div>;
});

export default Item;

