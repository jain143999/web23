import React from 'react';

import { FaShoppingCart } from "react-icons/fa";

import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <div id="leftText">Concordium <span style={{color:'red'}}>Namin</span></div>
      <div id="buttonContainer">
        <button className="button" id='wallet'>Connect Wallet</button>
        <button className="button" id='round'><FaShoppingCart size='15px'  color='white'/></button>
      </div>
    </div>
  );
};

export default Header;
