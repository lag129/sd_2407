"use strict";

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';
import Titlegazou from "../assets/logo.png"

const Home = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage1 = () => {
    navigation("/profile");
  }

  const onMovePage2 = () => {
    navigation("/create");
  }

  const onMovePage3 = () => {
    navigation("/join");
  }

  const [data, setdata] = useState([]);
  // ローカルストレージからデータを取得
  useEffect(() => {
    const jsonData = localStorage.getItem("myMeishiData");
    if (jsonData) {
      setdata(JSON.parse(jsonData));
    };
  }, []);

  return (
    <div className={styles.button_Center}>
      <div className={styles.button_Gazou}>
        <img src={Titlegazou} />
      </div>

      <div className={styles.button_Home}>
        <h2>あなたの名刺データ</h2>
        {data ? (
          <div>
            <p>名前：{data.name}</p>
            <p>所属：{data.shozoku}</p>
            <p>タグ：{data.tags}</p>
          </div>
        ) : (
          <div>
            <p>情報が入力されていません</p>
          </div>
        )}
        <button className={styles.button} onClick={onMovePage1}>プロフィール入力へ</button>
        <br></br>
        <h3>グループ</h3>
        <button className={styles.button_Group} onClick={onMovePage2}>作る</button>
        <button className={styles.button_Group} onClick={onMovePage3}>参加</button><br></br><br></br>
      </div>
    </div>
  );
};

export default Home;