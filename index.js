"use strict";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IncorrectTextBox } from './ui/IncorrectTextBox';


const Home = () => {
  const useState = React.useState;
  const [state, setState] = useState(0);
  const handleClick = () => setState(state + 1);

  return (
    <div>
      <p>カウント: {state}</p>
      <div>
        <button onClick={handleClick}>count up</button>
      </div>
      <IncorrectTextBox label="名前：" />
      <IncorrectTextBox label="所属：" />
      <IncorrectTextBox label="趣味などを入力" />
      {/* <button onClick={addsyumi}>追加</button> */}
    </div>
  );
};

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

  return (
    parsedData.map((user) => {
      return (
        <div>
          <p>{user.name}</p>
          <p>{user.shozoku}</p>
          <p>{user.tag}</p>
          <p>{user.percent}</p>
        </div>
      );
    })
  );
};

const App = () => (
  <Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<ResultPage />} />
      {/* 他のルートを追加する場合はここに記述 */}
    </Routes>

  </Router>
);



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);