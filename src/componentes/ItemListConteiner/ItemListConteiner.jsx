import React from 'react';
import { useState, useEffect } from 'react'
import ItemList from './ItemList';
import useFireStore from '../../hooks/useFireStore';


const ItemListConteiner = () => {

 const {items,load,getData} = useFireStore()

  useEffect(() => {
    getData()
  }, []);
  
  return (
    <div className="conteiner-fluid ">
      {load ? <h1>cargando...</h1> : <ItemList data={items} />}
     </div>
    );
};

export default ItemListConteiner;
    
 