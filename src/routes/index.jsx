import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Cart from '../componentes/Cart';
import CheckOut from '../componentes/CheckOut/CheckOut';
import ItemListConteiner from '../componentes/ItemListConteiner/ItemListConteiner';


const Rutas = () => {
  return (
      <BrowserRouter>

        <Routes>

            <Route path ='/' element={<ItemListConteiner />} /> 
            <Route path='cart'  element={<Cart />}/> 
            <Route path='cart/CheckOut'  element={<CheckOut />}/> 

        </Routes>

      </BrowserRouter>
  ) 
};

export default Rutas;
