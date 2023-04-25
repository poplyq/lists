import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export function Login() {
  return (
    <div className="login">
      <h1 className="loginLogo">Lists</h1>
      <div className="loginBlock">
        <p className="loginSub">Вход в Lists</p>
        <input
          className="loginInput"
          type="email"
          placeholder="Укажите адресс электронной почты"
        />
        <input
          className="loginInput"
          type="password"
          placeholder="Введите пароль"
        />
        <Link to="/desk" className="loginButton">
          <button type="button" className="loginButtonn">
            Войти
          </button>
        </Link>
        <Link to="/signup" className="loginUnder">
          Забыли пароль?
        </Link>
        <Link to="/signup" className="loginUnder">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}
