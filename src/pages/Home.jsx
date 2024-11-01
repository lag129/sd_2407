"use strict";

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';
import titileImage from "../assets/title.png"

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
      <img className="mx-auto" src={titileImage} width="600" />
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
        <button className="btn" onClick={onMovePage1}>プロフィール入力へ</button>
        <br></br>
        <h3>グループ</h3>
        <div className="flex justify-around">
          <button className="btn" onClick={onMovePage2}>グループを作成</button>
          <button className="btn" onClick={onMovePage3}>グループに参加</button>
        </div>
      </div>
    </div>
  );
};

export default Home;