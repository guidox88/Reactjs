import React,{useContext} from 'react'
import { CarritoContext } from '../Context/CarritoProvedor'
import CartItem from './CartItem/CartItem'
import CheckOut from './CheckOut/CheckOut'

const Cart = () => {
  const {carrito} = useContext(CarritoContext)

  return (
    <>
    {carrito.length > 1 ? (
    <div className='w-100 d-flex justify-content-around'> 
      <CheckOut carroto ={carrito}/>
      <div className='d-flex flex-column'></div>
      {carrito.map((elemento) => (
        <CartItem key={elemento.id} item={elemento}/>
      ))}

    </div>
    ): <h1> Carrito Vacio</h1> }
    </>
  )
}

export default Cart