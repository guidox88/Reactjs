import React, {useContext} from 'react';
import carrito1 from './assets/png/carrito.png';
import {Link} from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoProvedor';


const CartWidget = () => {

    const {carrito} = useContext(CarritoContext)

    return (
    <Link to={"/cart"} className="btn">
       
         <img className="w-25 " src={carrito1} alt=""/> {carrito.length}
     </Link>
    );
};

export default CartWidget; 
