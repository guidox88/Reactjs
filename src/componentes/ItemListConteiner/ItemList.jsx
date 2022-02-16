import React from 'react';
import Item from './Item';



const ItemList = ({items}) => {
  items = [
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

  
  return (
    <>
    {items.map((item) => ( <Item item={item} key={item.id} />))}
    </>
  )

}
export default ItemList;
