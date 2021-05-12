import React from 'react';
import './navBar.css';
import healing from '../../images/healing.png';

function NavBar(props) {
  return (
    <div className='content_header'>
    <img className='healingIcon' src={healing} />
    <span className="title">Patients</span>      
    </div>
  );
}

export default NavBar;



