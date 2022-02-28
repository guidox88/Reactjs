import React from 'react';
import carrito from './assets/png/carrito.png';
import {Link} from 'react-router-dom';

const CartWidget = () => {
    return (
    <Link to={"/cart"} className="btn">
         <img className="w-25" src={carrito} alt=""/> 0
     </Link>
    );
};

export default CartWidget; 
