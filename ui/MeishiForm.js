"use strict";

const handleSubmit = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name") || "";
  const shozoku = form.get("shozoku") || "";
  const tags = form.get("tags") || "";
  const jsonData = {
    name,
    shozoku,
    tags: tags.split(" "),
  };
  console.log(jsonData);
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