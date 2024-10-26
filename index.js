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

const sample_data = `[
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
"name": "hoge",
"shozoku": "東北工業大学",
"tag": [
      "プログラミング",
      "ハッカソン"
    ],
    "percent": 90
}
]`;

const userObject = JSON.parse(sample_data);

const ResultPage = (userObject) =>{
  const useState = React.useState;

  return (
    <div>
      <p>マッチング結果</p>
      <p>Name: ${userObject[0].name}</p>

      
      <button >プロフィールを表示</button>
      

      <p>2.(ここにマッチング率を表示)</p>
      <button >プロフィールを表示</button>
      

      <p>3.(ここにマッチング率を表示)</p>
      <button >プロフィールを表示</button>
      

    </div>

  );

}

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