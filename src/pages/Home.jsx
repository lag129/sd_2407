"use strict";

import { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
// import styles from './Button.module.css';
import titileImage from "../assets/title.png"

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const jsonData = localStorage.getItem("myMeishiData");
    if (jsonData) {
      setdata(JSON.parse(jsonData));
    };
  }, []);

  return (
    <div>
      <img className="mx-auto" src={titileImage} width="600" />
      <div>
        <h2 className="flex justify-center">あなたの名刺データ</h2>
        {data.name
          ? <Card name={data.name} shozoku={data.shozoku} tags={data.tags} />
          : <p>情報が入力されていません</p>
        }
        <Button name="プロフィールを入力" link="/profile" />
        <br />
        <h3 className="flex justify-center">グループ</h3>
        <div className="flex justify-around">
          <Button name="グループを作成" link="/create" />
          <Button name="グループに参加" link="/join" />
        </div>
      </div>
    </div>
  );
};

export default Home;