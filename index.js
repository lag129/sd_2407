"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MeishiForm from './ui/MeishiForm';
import CreateGroup from './ui/CreateGroup';
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

  const [data, setdata] = React.useState([]);
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
    <div className={styles.button_Center}>
      <h>プロフィール入力</h>

      <MeishiForm />
      {/* <button onClick={addsyumi}>追加</button> */}
      <button className={styles.button_Back} onClick={onMovePage}>ホームに戻る</button>
    </div>
  );
};

// ーーーーー3ページ目_マッチ結果表示ーーーーーー
const ResultPage = () => {
  const sampleData = `[
    {
      "name": "hoge",
      "shozoku": "東北工業大学",
      "tag": [
        "プログラミング",
        "ハッカソン"
      ],
      "percent": 90
    },
    {
      "name": "fuga",
      "shozoku": "東北大学",
      "tag": [
        "料理",
        "見た目"
      ],
      "percent": 30
    }
  ]`;

  const parsedData = JSON.parse(sampleData);
  console.log(parsedData);

  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/group");
  }

  return (
    parsedData.map((user) => {
      return (
        <div>
          <p>{user.name}</p>
          <p>{user.shozoku}</p>
          <p>{user.tag}</p>
          <p>{user.percent}</p>
          <button onClick={onMovePage}>グループ参加(4ページ目)</button>
        </div>
      );
    })
  );
};

const GroupsankaPage = () => {
  return (
    <div>
      <p>参加</p>
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
        <Route path="/groupsanka" element={<GroupsankaPage />} />
        {/* 他のルートを追加する場合はここに記述 */}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);