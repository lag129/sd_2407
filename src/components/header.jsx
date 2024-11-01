"use strict";

import styles from "./Header.module.css";
import logo from "../assets/logo.png";
//文字を押せば対象ページに行けるようにしたいので#に適切な変更を加えてください
//各項目を横並びにしたいです
const Header = () => {
  return (
    <header className={styles.button_Header}>

      <img src={logo} width="300" height="200" ></img>

    </header>

  );
};

export default Header;