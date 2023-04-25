import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className='navBar'>
      <div className='navbarLogo'>
        <h1>Lists</h1>
        <p> Create, Edit, Do</p>
      </div>

      <ul className='navbarNavigation'>
        <li>
          <a href='' className='navbarElement'>
            Возможности
          </a>
        </li>
        <li>
          <a href='' className='navbarElement'>
            Решения
          </a>
        </li>
        <li>
          <a href='' className='navbarElement'>
            Планы
          </a>
        </li>
        <li>
          <a href='' className='navbarElement'>
            Цены
          </a>
        </li>
        <li>
          <a href='' className='navbarElement'>
            Контакты
          </a>
        </li>
      </ul>

      <Link to={'/login'}>
        <button className='navbarLogin'>Войти</button>
      </Link>
    </div>
  );
};
