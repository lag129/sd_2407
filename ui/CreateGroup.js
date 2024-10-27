"use strict";

import React from 'react';
import { addDataToFirebase, createRoom } from '../backend/fetch';

/**
 * 100000から999999までのランダムな整数を作成
 * @returns int ランダムな整数
 */
const generateID = () => {
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  return randomNum;
}

// const id = generateID();

const CreateGroup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ローカルストレージからデータを取得
    const myData = localStorage.getItem("myMeishiData");
    const data = JSON.parse(myData);
    try {
      await addDataToFirebase("123456", data);
      console.log("追加成功");
    } catch (error) {
      console.error("追加エラー:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>データを送信</button>
    </div>
  );
};

export default CreateGroup;