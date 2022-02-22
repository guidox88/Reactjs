import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';


const ItemListConteiner = () => {
 const data = [
  { id:1,
    img:"https://http2.mlstatic.com/D_NQ_NP_764808-MLA45557311923_042021-O.jpg",
   nombre:"Mini Lama",
   stock:20,
   precio:40,
 },

 { id:2,
   nombre:"Lama",
   img:"https://http2.mlstatic.com/D_NQ_NP_793129-MLA46808774974_072021-O.jpg",
   stock:20,
   precio:40,
   
 },

 ];

   const [items, setItems] = useState([]);

  useEffect(() => { 
    new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(data);
       }, 2000);

    }).then((res) => setItems(res)); 

    return () => {
      setItems([])
    };

  },[]);

  return (
    <div className="conteiner-fluid w-50">
      <ItemList data={items}/>
     </div>
    );
};

export default ItemListConteiner;
    
 