import React, { ReactNode, FC } from 'react';
import './style.css'


interface headerProps {
  Menu?: ReactNode;
}

const Header: FC<headerProps> = ({ Menu }) => {
  return (
    <>
      <header id="header-top" className="header-top">
        <div className="logo">
          <img src="https://www.municipioonline.com.br/se/treinamento/propria/logomarca" />
        </div>
        <div className="title-page">PREFEITURA TREINAMENTO</div>
        { Menu }
      </header>
    </>
  );
}

export default Header;
