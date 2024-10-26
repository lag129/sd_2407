"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MeishiForm from './ui/MeishiForm';

//　ーーーーーーー1ページ目_ホーム欄ーーーーーーーー
const Home = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/meishi");
  }

  return (
    <div>
      <p>あなたの名刺データ</p>
      <p>名前：</p>
      <p>所属：</p>
      <p>趣味：</p>

      <br></br>
      <p>グループ</p>
      <button>作る</button>
      <button>入る</button><br></br><br></br>


      <button onClick={onMovePage}>プロフィール入力(2ページ目)へ</button>
    </div>
  );
};

//　ーーーーーーー2ページ目_名刺入力欄ーーーーーーーー
const Meishi = () => {
  const useState = React.useState;
  const [state, setState] = useState(0);
  const handleClick = () => setState(state + 1);

  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/result");
  }

  return (
    <div>
      <h>プロフィール入力</h>
      <p>カウント: {state}</p>
      <div>
        <button onClick={handleClick}>count up</button>
      </div>
      <MeishiForm />
      {/* <button onClick={addsyumi}>追加</button> */}
      <button onClick={onMovePage}>マッチ結果(3ページ目)へ</button>
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


const groupPage = () => {
  return (
    <p>４ページ目</p>
  );
};

//　ページ遷移動作
const App = () => (
  <Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meishi" element={<Meishi />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/group" element={<groupPage />} />
      {/* 他のルートを追加する場合はここに記述 */}
    </Routes>

  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);