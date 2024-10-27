"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
//↓CSSファイル名を適切に変えてください
//import classes from "test.css";
//文字を押せば対象ページに行けるようにしたいので#に適切な変更を加えてください
const Header = () => {
  return(
    <header>
      <h1><a herf = "#">なにはな</a></h1>
      <nav>
        <ul className = "menu-group">
          <li className = "menu-item"><a href="#">グループを作る</a></li>
          <li className = "menu-item"><a href="#">グループに参加</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;