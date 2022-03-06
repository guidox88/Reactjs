import React, {useState} from 'react'
import useFireStore from '../../hooks/useFireStore';
import Spinner from '../spinner/Spinner';

const CheckOut = ({carrito}) => {

  const [form,setForm] = useState ({
    buyer:{
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
    },
    items:carrito,
    total:1400

  });
  
  const {generateOrder, load} = useFireStore()

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
      [e.target.name]:e.target.value,
  }, 
});
};

const handleSubmit = (e) => {
  e.preventDefault()
  generateOrder({datos:form})

}

  return (
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input onChange={handleChange} name="nombre" value={form.buyer.nombre} type="text" class="form-control" />
  </div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Apellido</label>
    <input onChange={handleChange} name="apellido" value={form.buyer.apellido} type="text" class="form-control" />
  </div>
  <div class="mb-3 form-check">
  <label for="exampleInputEmail1" class="form-label">Telefono</label>
    <input onChange={handleChange} name="telefono" value={form.buyer.telefono} type="number" class="form-control" />
  </div>
  <div class="mb-3 form-check">
  <label for="exampleInputEmail1" class="form-label">Email </label>
    <input name="email" value={form.buyer.email} type="email" class="form-control" />
  </div>
  {load ? <button disable={true} className='btn btn.warning'>
    <Spinner />
     </button> : (
       <button type="submit" class="btn btn-primary w-100">Comprar</button>
  )}
  
</form>
  )
}

export default CheckOut