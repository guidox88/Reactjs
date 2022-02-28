import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({ item }) => {

  return (
      <div> 
          <div>
              <img src={item.img} alt="" />
              <div>
                  <div>
                      <div>
                          <h4>{item.nombre}</h4>
                          <h6>{item.descripcion}</h6>

                          <div> 
                              <p>desarollado</p>
                              <p>`{item.desarrollador}`
                              </p>
                          </div>
                          <div>
                              <p>año de lanzamiento</p>
                              <p>{item.year}</p>
                          </div>
                      </div>
                      <div>
                          {<ItemCount stock={item.stock} initial={1} />}
                      </div>
                  </div>
              </div>
          </div>
      </div>      
  );
};

export default ItemDetail