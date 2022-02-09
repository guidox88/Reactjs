import React from "react";
import CartWidget from "./CartWidget";





let style = {

  margin: "0", padding: "0", overflowY: "auto", overflowX: "hidden", color: "white", backgroundColor: "Black", display: "flex", listStyle: "none", textDecoration: "none", fontSize: "2rem", justifyContent: "center", boxSizing: "border-box"
}


function NavBar() {
   return <>
    <ul style={style} >

      <li><a href="index.html">Inicio</a></li>

      <li><a href="Nosotros.html">Nosotros</a></li>

      <li><a href="Productos.html">Productos</a></li>

      <li><a href="Filamentos.html">Filamentos</a></li>

      <li><a href="Contacto.html">Contacto</a></li>
      
      
          <CartWidget />
      
    </ul>
      
      
  </>;
   
      
    
   
}

export default NavBar;
