"use strict";

import { addDataToFirebase } from '../backend/fetch';
import styles from './Button.module.css';

/**
 * 100000から999999までのランダムな整数を作成
 * @returns int ランダムな整数
 */
const generateID = () => {
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  return randomNum.toString();
}

const CreateGroup = () => {
  const id = generateID();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ローカルストレージからデータを取得
    const myData = localStorage.getItem("myMeishiData");
    const data = JSON.parse(myData);
    try {
      await addDataToFirebase(id, data);
      console.log("追加成功");
    } catch (error) {
      console.error("追加エラー:", error);
    }
  };

  return (
    <div className={styles.button_ID}>
      <p>あなたのグループIDは {id} です。</p>
      <button className="btn" onClick={handleSubmit}>グループを作成</button>
    </div>
  );
};

export default CreateGroup;