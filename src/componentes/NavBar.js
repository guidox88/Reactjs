import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";


let style = {

  margin: "0", padding: "0", overflowY: "auto", overflowX: "hidden", color: "white", backgroundColor: "Black", display: "flex", listStyle: "none", textDecoration: "none", fontSize: "2rem", justifyContent: "center", boxSizing: "border-box"
}


function NavBar() {
   return <>
    <ul style={style} >

      <li>
        <NavLink to={"/"}>Inicio</NavLink></li>

      <li>< NavLink to={"Nosotros"}>Nosotros</NavLink></li>

      <li><NavLink to={"Productos"}>Productos</NavLink></li>

      <li><NavLink to={"Filamentos"}>Filamentos</NavLink></li>

      <li><NavLink to={"Contacto"}>Contacto</NavLink></li>
      
      
          <CartWidget />
      
    </ul>
      
      
  </>;
   
      
    
   
}

export default NavBar;
