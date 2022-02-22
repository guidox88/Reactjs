import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Cart from '../componentes/Cart';
import CheckOut from '../componentes/CheckOut/CheckOut';
import ItemCount from '../componentes/ItemCount';
import ItemDetailConteiner from '../componentes/ItemdetailConteiner/ItemDetailConteiner';
import ItemList from '../componentes/ItemListConteiner/ItemList';
import ItemListConteiner from '../componentes/ItemListConteiner/ItemListConteiner';
import NavBar from '../componentes/NavBar';


const Rutas = () => {
  return (
      <BrowserRouter>

        <NavBar />

        <Routes>

            <Route path ='/' element={<ItemListConteiner />} /> 
            <Route path='cart'  element={<Cart />}/> 
            <Route path='cart/CheckOut'  element={<CheckOut />}/>
            <Route path='item/:id'  element={<ItemDetailConteiner />}/>
            <Route path='category/:categoryid'  element={<ItemListConteiner />}/>  
 

        </Routes>

      </BrowserRouter>
  ) 
};

export default Rutas;
