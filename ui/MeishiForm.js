"use strict";

import React, { useState } from 'react';

const handleSubmit = (event, setMessage) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const shozoku = formData.get('shozoku');
  const tags = formData.get('tags');

  const jsonData = {
    name,
    shozoku,
    tags: tags.split(" "),
  };
  // ローカルストレージに保存
  localStorage.setItem("myMeishiData", JSON.stringify(jsonData));

  // メッセージを表示
  setMessage('入力が完了しました！');
};

export default function MeishiForm() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, setMessage)}>
        <label>
          名前：
          <input type="text" name="name" defaultValue="" />
        </label>
        <br />
        <label>
          所属：
          <input type="text" name="shozoku" defaultValue="" />
        </label>
        <br />
        <label>
          趣味などを入力：
          <input type="text" name="tags" defaultValue="" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};