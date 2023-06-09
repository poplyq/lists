import React from 'react';
import './navbar.css';
import logo from './100.png';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbarTitle'>Lists</h1>
      <nav>
        <ul className='navbarList'>
          <li className='navbarElement'>Рабочие пространства</li>
          <li className='navbarElement'>Недавние</li>
          <li className='navbarElement'>В избранном</li>
          <li className='navbarElement'>Шаблоны</li>
        </ul>
      </nav>
      <img src={logo} className='navbarUser' />
    </div>
  );
};
