"use strict";

import React from 'react';

const generateID = () => {
  // 100000から999999までのランダムな整数を作成
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  return randomNum.toString();
}

const id = generateID();

const CreateGroup = () => {
  return (
    <div>
      <h1>グループ作成</h1>
      <p>グループID: {id}</p>
      <button onClick={() => { console.log(id) }}>グループID生成</button>
    </div>
  );
};

export default CreateGroup;