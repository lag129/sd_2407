"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
//↓CSSファイル名を適切に変えてください
import classes from './Header.css';
//文字を押せば対象ページに行けるようにしたいので#に適切な変更を加えてください
const Header = () => {
  return(
    <header>
      <h1><a herf = "#"><img> src = </img></a></h1>
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