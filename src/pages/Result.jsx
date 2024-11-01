"use strict";

import { useState, useEffect } from 'react';
import { fetchDataFromFirebase } from '../backend/fetch';
import { findSmilarity } from '../logic/findSimilarity';
import Button from '../components/Button';
import Card from '../components/Card';

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

  const sortedData = data.sort((a, b) => b.percent - a.percent);

  return (
    <div>
      <ul>
        {sortedData.map((item, index) => (
          <li key={index}>
            <Card 
              name={item.name}
              shozoku={item.shozoku}
              tags={item.tags}
              percent={item.percent}
            />
          </li>
        ))}
      </ul>
      <Button name="ホームに戻る" link="/" />
    </div>
  );
};

export default ResultPage;