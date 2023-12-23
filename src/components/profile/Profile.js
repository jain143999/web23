import React from 'react';

import { MdContentCopy } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";

import './Profile.css';

const listdata = [
  {
    text:'Details',
  },
  {
    text:'Records',
  },
  {
    text:'Offers',
  },
  {
    text:'Domain Activity',
  }
]

const Profile = () => {
  return (
    <div className='profile-main-container'>
      <div className="profile-container">
      <div className="image-with-text-container">
        <div className="image-container">
          <img src='https://picsum.photos/200/300' alt="Image" />
        </div>

        <div className="text-container">
          <h1>mrtoys.ccd</h1>
          <div style={{display:'flex'}}>
            <span id='owner-container' style={{backgroundColor:'#4DA2A9', width:' 3rem', textAlign:'center', height:'25px', marginRight:'5px'}}>owner</span>
            <span>cdcccccccccndajad</span>
            <div className=''>
        <MdContentCopy size={20} fill='white'/>
        </div>
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <button className="profile-button">List for Sale</button>
        <button className="profile-button" id='renew-button'>Renew</button>
        <button className="button round-button"><FiRefreshCw fill='purple'/></button>
      </div>
      <div className="row-container">
         <div>
      {listdata.map((item, index) => (
         <div className="profile-item">
        <div key={index}>
          <p>{item.text}</p>
          <div className='icon'>
        <IoAddCircle size={30} fill='white'/>
        </div> 
        </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Profile;
