"use strict";

import { addDataToExistingRoom } from '../backend/fetch';
import { useNavigate } from 'react-router-dom';
import styles1 from "./JoinGroup.module.css";

const JoinGroup = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const id = form.get("id") || "";
    localStorage.setItem("groupId", id);
    handleSubmit(id);
    navigate("/result");
  };

  const handleSubmit = async (id) => {
    const myData = localStorage.getItem("myMeishiData");
    const data = JSON.parse(myData);
    try {
      await addDataToExistingRoom(id, data);
      console.log("追加成功");
    } catch (error) {
      console.error("追加エラー:", error);
    }
  };

  return (
    <div className={styles1.button__Join}>
      <div className={styles1.button_Sa}>
        <h1>グループに参加</h1>
        <p>グループIDを入力してください</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="id" />
          <button className="btn" type="submit">参加する</button>
        </form>
      </div>
    </div>
  );
};

export default JoinGroup;