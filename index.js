"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MeishiForm from './ui/MeishiForm';
import CreateGroup from './ui/CreateGroup';

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

  return (
    <div>
      <p>あなたの名刺データ</p>
      <p>名前：</p>
      <p>所属：</p>
      <p>趣味：</p>

      <button onClick={onMovePage1}>プロフィール入力へ</button>

      <br></br>
      <p>グループ</p>
      <button onClick={onMovePage2}>作る</button>
      <button onClick={onMovePage3}>入る</button><br></br><br></br>


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
    <div>
      <h>プロフィール入力</h>

      <MeishiForm />
      {/* <button onClick={addsyumi}>追加</button> */}
      <button onClick={onMovePage}>ホームに戻る</button>
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