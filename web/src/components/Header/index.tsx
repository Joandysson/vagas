import React from 'react';
import './style.css'
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://www.municipioonline.com.br/se/treinamento/propria/logomarca" />
        </div>
        <div className="title-page">PREFEITURA TREINAMENTO</div>
        {/* <div> */}
          <nav className="flex-end">
            <ul>
              <li ><a className="active" href="#home">Home</a></li>
              <li><a href="#focus">Serviços</a></li>
              <li><a href="#aboutus">O Município</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        {/* </div> */}
      </header>
    </>
  );
}

export default Header;
