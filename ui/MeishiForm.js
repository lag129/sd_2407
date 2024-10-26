"use strict";

const handleSubmit = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name") || "";
  const shozoku = form.get("shozoku") || "";
  const tags = form.get("tags") || "";
  console.log(`名前: ${name}\n所属: ${shozoku}\nタグ: ${tags}`);
};

export default function MeishiForm() {
  return (
    <form onSubmit={handleSubmit}>
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
  );
};