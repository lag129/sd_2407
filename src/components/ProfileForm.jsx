"use strict";

import { useState } from "react";

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

function ProfileForm() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, setMessage)}>
        名前：<input type="text" name="name" />
        <br />
        所属：<input type="text" name="shozoku" />
        <br />
        趣味などを入力：<input type="text" name="tags" />
        <br />
        <button className="btn" type="submit">決定</button>
      </form>
      {message && <p key="message">{message}</p>}
    </div>
  );
};

export default ProfileForm;