import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Cart from '../componentes/Cart';
import CheckOut from '../componentes/CheckOut/CheckOut';
import ItemCount from '../componentes/ItemCount';
import ItemDetailConteiner from '../componentes/ItemdetailConteiner/ItemDetailConteiner';
import ItemList from '../componentes/ItemListConteiner/ItemList';
import ItemListConteiner from '../componentes/ItemListConteiner/ItemListConteiner';
import NavBar from '../componentes/NavBar';
import Prueba1 from '../componentes/prueba/Prueba1';
import Prueba from '../componentes/prueba/Prueba';
import Nosotros from '../Paginas/Nosotros';
import Filamentos from '../Paginas/Filamentos';
import Contacto from '../Paginas/Contacto';
import Productos from '../Paginas/Productos';


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
            <Route path="Nosotros"  element={<Nosotros />}/>
           <Route path="Filamentos"  element={<Filamentos />}/>
            <Route path="Contacto"  element={<Contacto />}/>
            <Route path="Productos"  element={<Productos />}/>

            <Route path="Prueba"  element={<Prueba />}/>
            <Route path="Prueba1"  element={<Prueba1 />}/>

        </Routes>

      </BrowserRouter>
  ) 
};

export default Rutas;
