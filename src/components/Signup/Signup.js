import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export function Signup(){
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePass, setRepeate] = useState('');
  const [notEqual, setEqual] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    if (repeatePass) {
      if (!(password === repeatePass)) {
        console.log(repeatePass);
        setTimeout(() => {
          setEqual('пароли не совпадают');
        }, 100);
      } else {
        setEqual('');
      }
    }
  }, [repeatePass]);

  const signup = () => {
    const auth = getAuth();
    console.log(login);
    console.log(password);
    let email = login;
    createUserWithEmailAndPassword(auth, email, password).then(
      (EmailAuthCredential) => {
        const user = EmailAuthCredential.user;
      }
    );
    //   .catch((error) => {
    //     console.log(auth);
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };
  return (
    <div className='login'>
      <h1 className='loginLogo'>Lists</h1>
      <div className='loginBlock'>
        <p className='loginSub'>Зарегистрируйся в Lists</p>
        <p>{notEqual}</p>
        <p>{user}</p>

        <input
          className='loginInput'
          type='email'
          placeholder='Укажите адресс электронной почты'
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <input
          className='loginInput'
          type='password'
          placeholder='Введите пароль'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className='loginInput'
          type='password'
          placeholder='Повторите пароль'
          onChange={(e) => setRepeate(e.target.value)}
        ></input>
        <Link to={'/login'} className='loginButton'>
          <button className='loginButtonn' onClick={signup}>
            Создать аккаунт
          </button>
        </Link>

        <Link to={'/login'} className='loginUnder'>
          Есть аккаунт? Войти
        </Link>
      </div>
    </div>
  );
};

