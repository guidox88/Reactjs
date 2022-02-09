import React from 'react';
import carrito from './assets/png/carrito.png';

const CartWidget = () => {
    return (
        <div className="d-flex  mx-5">
            <img className="w-25" src={carrito} alt=""/>

        </div>
    )
};

export default CartWidget;
