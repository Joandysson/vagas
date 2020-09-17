import React from 'react';
import Menu from '../Menu';
import './style.css'
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://www.municipioonline.com.br/se/treinamento/propria/logomarca" />
        </div>
        <div className="title-page">PREFEITURA TREINAMENTO</div>
        <Menu />
      </header>
    </>
  );
}

export default Header;
