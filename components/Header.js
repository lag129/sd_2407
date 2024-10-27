"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import style from "../components/Header.css";

import logo from "../img/rogo.png";
//文字を押せば対象ページに行けるようにしたいので#に適切な変更を加えてください
//各項目を横並びにしたいです
const Header = () => {
  return (
    <header className={style.button_Header}>
 
        <img src={logo} width="300" height="200" ></img>

    </header>
    
  );
};

export default Header;