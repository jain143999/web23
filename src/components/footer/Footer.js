
import React from 'react';

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillAlipayCircle } from "react-icons/ai";

import './Footer.css'

const Footer = () => {
return(
    <div id="footer">
      <div className='footer-text-container'>
      <div id="leftText1">CONCORDIUM </div>
      <div id='leftText2'>poweredBy <p id='text2'><span><AiFillAlipayCircle fill='white'/>WEB23</span></p> </div>
      <div id='leftText3'>@2023 all rights reserved<p id='text3'>privacy policy</p></div>
      </div>
      <div id="buttonContainer1">
      <span id='twitter'><FaTwitter size={30} fill='white'/></span>
         <span id='facebook'>
         <FaFacebook size={30} fill='white'/>
         </span>
      </div>
    </div>
);
};

export default Footer;
