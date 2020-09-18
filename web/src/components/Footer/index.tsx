import React from 'react';
import './style.css';
import { ImLocation2 } from 'react-icons/im';
import { FaPhoneSquareAlt, FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div></div>
          <div className="location" ><ImLocation2/></div>
          <div></div>
          <div className="mail"><MdEmail/></div>
          <div className="phpne"><FaPhoneSquareAlt/></div>
          <div className="copyright">
            <FaFacebookF />
          ©2016 3Tecnos Tecnologia LTDA
          <a href="http://www.3Tecnos.com.br">www.3Tecnos.com.br</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;