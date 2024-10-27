"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MeishiForm from './ui/MeishiForm';
import CreateGroup from './ui/CreateGroup';
import JoinGroup from './ui/JoinGroup';
import { fetchDataFromFirebase } from './backend/fetch';
import styles from './Button.module.css';
import Titlegazou from "./img/An1_png.png"



//　ーーーーーーー1ページ目_ホーム欄ーーーーーーーー
const Home = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage1 = () => {
    navigation("/meishi");
  }

  const onMovePage2 = () => {
    navigation("/groupmake");
  }

  const onMovePage3 = () => {
    navigation("/groupsanka");
  }

  const [data, setdata] = useState([]);
  // ローカルストレージからデータを取得
  React.useEffect(() => {
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
        <button className={styles.button_Group} onClick={onMovePage3}>入る</button><br></br><br></br>
      </div>
      
    </div>
  );
};

//　ーーーーーーー2ページ目_名刺入力欄ーーーーーーーー
const Meishi = () => {
  const useState = React.useState;
  const [state, setState] = useState(0);

  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/");
  }

  return (
    <div className={styles.button_prof}>
      <h1>プロフィール入力</h1>

      <MeishiForm />
      {/* <button onClick={addsyumi}>追加</button> */}
      <button className={styles.button_Back} onClick={onMovePage}>ホームに戻る</button>
    </div>
  );
};

// ーーーーー3ページ目_マッチ結果表示ーーーーーー
const ResultPage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchDataFromFirebase('123456');
        console.log('データの取得に成功しました:', fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    };
    loadData();
  }, []);

  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/group");
  }

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.shozoku}</p>
            <p>{item.tags}</p>
            {/* <p>percent</p> */}
          </li>
        ))}
      </ul>
      <button onClick={onMovePage}>グループ参加(4ページ目)</button>
    </div>
  );
};

//　ページ遷移動作
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meishi" element={<Meishi />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/groupmake" element={<CreateGroup />} />
        <Route path="/groupsanka" element={<JoinGroup />} />
        {/* 他のルートを追加する場合はここに記述 */}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);