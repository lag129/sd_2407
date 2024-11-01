"use strict";

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromFirebase } from '../backend/fetch';
import { findSmilarity } from '../logic/findSimilarity';

const ResultPage = () => {
  // ローカルストレージからidを取得
  const id = localStorage.getItem("groupId");
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        setData(await fetchDataFromFirebase(id));
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    };
    loadData();
  }, []);

  const myData = localStorage.getItem("myMeishiData");
  const myJsonData = JSON.parse(myData);

  if (data.length) {
    data.map((item) => {
      let percent = findSmilarity(myJsonData.tags, item.tags);
      // percent = Math.max(50, Math.min(100, percent));
      item.percent = percent;
    });
  };

  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/group");
  }

  const sortedData = data.sort((a, b) => b.percent - a.percent);

  return (
    <div>
      <ul>
        {sortedData.map((item, index) => (
          <li key={index}>
            <p>マッチ率 {parseInt(item.percent, 10)}%</p>
            <p>{item.name}</p>
            <p>{item.shozoku}</p>
            <p>{item.tags.join(' ')}</p>
          </li>
        ))}
      </ul>
      <button onClick={onMovePage}>グループ参加(4ページ目)</button>
    </div>
  );
};

export default ResultPage;