"use strict";

import React from "react";
import { addRoomData, fetchRoomData } from "../backend/fetch";

// firebaseからuseStateでデータを取得
export const useFetchData = (collectionName) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRoomData(collectionName);
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [collectionName]);

  return { data, loading };
};

const fetchedData = useFetchData("posts");
// JSONに変換する
const jsonData = JSON.stringify(fetchedData, null, 2);

// ローカルストレージから自分のデータを取得
const myData = localStorage.getItem("myMeishiData");
// JSONに変換する
const myJsonData = JSON.stringify(myData, null, 2);

// 類似度計算関数
// JSON配列のtagを全通り比較して、類似度を計算する
jsonData.forEach((yourData) => {
  console.log(findSmilarity(myJsonData.tags, yourData.tags));
});

// テストデータ
// const tags1 = ['aaa','bbb','CCC'];
// const tags2 = ['aaa','bbb','CCC'];

/**
 * 2つのタグの配列を比較して、類似度を計算する
 * 
 * @param {Array<string>} mytags 
 * @param {Array<string>} yourtags 
 * @returns int 類似度
 */
const findSmilarity = (mytags, yourtags) => {
  // 2つの配列の共通要素を出力   
  const result = mytags.filter(element => yourtags.includes(element));
  // 共通の要素の数を計算
  const commonCount = result.length;

  // 配列の最大長さを計算
  const maxLength = Math.max(mytags.length, yourtags.length);

  // console.log((commonCount / maxLength) * 100);
  // 類似度をパーセンテージで計算   
  return (commonCount / maxLength) * 100;
}

// console.log(findSmilarity(tags1,tags2));