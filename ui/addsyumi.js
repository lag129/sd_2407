import React from 'react';


export const addsyumi = (props) => {
  const [value, setValue] = React.useState("");

  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }

  return (
    <div>
      <button onClick={onClickAddText}>追加</button>

      <p>リアルタイム：{text}</p>

        {/* ↓pタグを追加 */}
      <p>ボタンクリック：{addText}</p>
    </div>
  );
};