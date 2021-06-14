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
      <Linnk to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Linnk>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
