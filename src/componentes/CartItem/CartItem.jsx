import React from 'react'

const CartItem = ({item}) => {
  return (
    <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={item.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.nombre}</h5>
        <p class="card-text">descripcion</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default CartItem