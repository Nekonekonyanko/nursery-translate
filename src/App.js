import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

const translateText = () => {
  const text = input.trim(); // 余計なスペース削除

  if (text.includes("熱")) {
    setTranslated("She has a fever today.");
  } else if (text.includes("お迎え")) {
    setTranslated("I will be late for pick-up.");
  } else if (text.includes("元気")) {
    setTranslated("She is doing well.");
  } else if (text.includes("鼻")) {
  setTranslated("She has a runny nose.");
  } else {
    setTranslated("Translation not found (demo)");
  }
};

  return (
    <div style={{ padding: 20 }}>
      <h1>Nursery Translate</h1>

      <textarea
        rows="4"
        cols="40"
        placeholder="日本語を入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={translateText}>翻訳する</button>

      <h2>英語</h2>
      <p>{translated}</p>
      <button
  onClick={() => {
    navigator.clipboard.writeText(translated);
    alert("コピーしました！");
  }}
>
  コピー
</button>
<div>
  <h3>よく使う文章</h3>
  <button onClick={() => setInput("今日は熱があります")}>熱</button>
  <button onClick={() => setInput("お迎えが遅れます")}>遅れる</button>
  <button onClick={() => setInput("元気です")}>元気</button>
</div> </div>
  );
}