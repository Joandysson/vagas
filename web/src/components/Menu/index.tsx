import React from 'react';
import './style.css'
import { BiMenu } from 'react-icons/bi';


function Menu() {

  const menuMobile = () => {
    var nav: any = document.getElementById("nav-menu");
    var header: any = document.getElementById("header-top");
    if(nav.classList.contains("nav-none")){
      header.classList.add("p-bottom-45");
      setTimeout(() => {
        nav.classList.remove("nav-none");
      }, 400);
      return
    }
    nav.classList.add("nav-none");
    header.classList.remove("p-bottom-45");

  }

  return (
    <>
    <nav id="nav-menu" className="flex-end nav-none">
      <ul>
        <li ><a className="active" href="#home">Home</a></li>
        <li><a href="#focus">Serviços</a></li>
        <li><a href="#aboutus">O Município</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
    <div onClick={menuMobile} className="menu-float flex-end"><BiMenu /></div>
    </>
  );
}

export default Menu;
