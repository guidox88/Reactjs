import React from 'react';
import Item from './Item';

const ItemList = ({data}) => {

  return (
    <div className='row my-5 justify'>
    {data && data.map((d,i) => <Item key={i} item={d} />)}
    </div>
 )
};

export default ItemList;
