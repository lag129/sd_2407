"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
//↓CSSファイル名を適切に変えてください
import classes from './Header.css';

import logo from "../img/An1_png.png";
//文字を押せば対象ページに行けるようにしたいので#に適切な変更を加えてください
const Header = () => {
  return(
    <header>
      <h1 className={classes.img}><img src = {logo} alt = "ロゴマーク"></img></h1>
      <nav>
        <ul>
          <li className = {classes.text}><a href= "#">名刺の編集</a></li>
          <li className = {classes.text}><a href="#">グループを作る</a></li>
          <li className = {classes.text}><a href="#">グループに参加</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;