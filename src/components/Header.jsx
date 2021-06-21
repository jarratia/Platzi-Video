/* eslint-disable jsx-quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

//Statics
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/">Cuenta</Link>
          </li>
          <li>
            <Link to="/login">Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
