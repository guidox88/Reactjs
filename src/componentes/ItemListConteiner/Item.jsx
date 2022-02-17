
import React from 'react';

const Item = ({item}) => {

      

    return <div className="d-flex text-center  ">
     <div className=" col-md-3 border border-dark m-1 ">
        <h1>Producto:{item.id}</h1>
        <img className='w-50' src={item.img} alt="" />
        <p>Nombre:{item.nombre}</p>
        <p>Stock:{item.stock}</p>
        <h4>Precio:${item.precio}</h4>
        <button>Ver mas detalle</button>
        <p></p>
       
        </div>
    </div>;
};

export default Item;

