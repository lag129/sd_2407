"use strict";

import React from 'react';
import { addRoomData, fetchRoomData } from '../backend/fetch';

const generateID = () => {
  // 100000から999999までのランダムな整数を作成
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  return randomNum.toString();
}

const id = generateID();

/**
 * ローカルストレージのデータをサーバーへ送信 
 */
const handleSubmit = async (e) => {
  e.preventDefault();
  // ローカルストレージからデータを取得
  const myData = localStorage.getItem("myMeishiData");
  const data = JSON.parse(myData);
  try {
    const docId = await addRoomData("posts", data);
    console.log("追加成功:", docId);
  } catch (error) {
    console.error("追加エラー:", error);
  }
};

const CreateGroup = () => {
  return (
    <div>
      <h1>グループ作成</h1>
      <p>グループID: {id}</p>
      <button onClick={handleSubmit}>グループID生成</button>
    </div>
  );
};

export default CreateGroup;