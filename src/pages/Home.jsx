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
      <img className="mx-auto mt-8" src={titileImage} width="400" />
      <div>
        <h2 className="flex justify-center mt-16 text-lg">あなたの名刺データ</h2>
        {data.name
          ? <Card name={data.name} shozoku={data.shozoku} tags={data.tags} />
          : <p>情報が入力されていません</p>
        }
        <br /><br />
        <Button name="プロフィールを入力" link="/profile" />
        <br />
        <h3 className="flex justify-center text-lg">グループ</h3>
        <div className="flex justify-around">
          <Button name="グループを作成" link="/create" />
          <Button name="グループに参加" link="/join" />
        </div>
      </div>
    </div>
  );
};

export default Home;