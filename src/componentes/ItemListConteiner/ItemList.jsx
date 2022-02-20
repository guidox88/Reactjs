import React from 'react';
import Item from './Item';

const ItemList = ({data}) => {

  return (
    <div>
    {data && data.map((d,i) => <Item key={i} item={d} />)}
    </div>
 )
};

export default ItemList;
