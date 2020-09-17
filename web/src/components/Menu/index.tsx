import React from 'react';
import './style.css'

function Menu() {
  return (
    <nav className="flex-end">
      <ul>
        <li ><a className="active" href="#home">Home</a></li>
        <li><a href="#focus">Serviços</a></li>
        <li><a href="#aboutus">O Município</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
