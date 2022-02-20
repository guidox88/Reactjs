import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ItemListConteiner from '../componentes/ItemListConteiner/ItemListConteiner';


const Rutas = () => {
  return (
      <BrowserRouter>

        <Routes>

            <Route path ="/" element={<ItemListConteiner />} > 
            </Route>
        

        </Routes>

      </BrowserRouter>
  ) 
};

export default Rutas;
