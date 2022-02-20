import Item from './Item';
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react'

const ItemListConteiner = () => {

    const data = [] ;

    const [items, setItems] = useState([]);

  useEffect(() => { 
  new Promise((resolve,reject) => {
        setTimeout(() => { 
           resolve(data);
      }, 3000);

    }).then((res) => setItems(res)); 

    return () => {
      setItems([])
    };

  },[]);

  return (
    <div className='conteiner-fluid'>
    
      <ItemList data={items}/>
     </div>
    );
};

export default ItemListConteiner;
    
 