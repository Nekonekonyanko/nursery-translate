import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);


  return (
  <div style={{
    padding: 20,
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  }}>
    
    <div style={{
      maxWidth: 400,
      margin: "0 auto",
      backgroundColor: "#ffffff",
      padding: 20,
      borderRadius: 10,
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      
    <h1 style={{ fontSize: 22, marginBottom: 10, textAlign: "center" ,fontWeight: "bold"}}>
      Nursery Translate
    </h1>

      <select
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  }}
>
  <option value="">名前を選択</option>
  <option value="Hina">ひな</option>
  <option value="Rin">りん</option>
  <option value="Yue">ゆえ</option>
</select>

    <h3 style={{ marginTop: 30 , marginBottom: 10}}>よく使う文章</h3>

<div style={{
  display: "flex",
  gap: 10,
  flexWrap: "wrap"
}}>
  <button
  style={{
  padding: "8px 12px",
  borderRadius: 20,
  border: "none",
  backgroundColor: "#eee",
  cursor: "pointer",
  transition: "0.2s"
}}
onMouseDown={(e) => e.target.style.transform = "scale(0.95)"}
onMouseUp={(e) => e.target.style.transform = "scale(1)"}
  onClick={() => {
  if (!name) {
    alert("名前を選んでください");
    return;
  }

  setInput(`${name}は今日は熱がありますのでお休みします`);
  setTranslated(`${name} has a fever today, so will be absent from school.`);
}}
>
  熱
</button>
<button
style={{
  padding: "8px 12px",
  borderRadius: 20,
  border: "none",
  backgroundColor: "#eee",
  cursor: "pointer",
  transition: "0.2s"
}}
onMouseDown={(e) => e.target.style.transform = "scale(0.95)"}
onMouseUp={(e) => e.target.style.transform = "scale(1)"}

  onClick={() => {
  setInput(`今日は${name}を⚪︎時に迎えに行きます`);
  setTranslated(`Today I will pick up ${name}  at XX o'clock.`);
}}
>
  迎え
</button>
<button
  style={{
  padding: "8px 12px",
  borderRadius: 20,
  border: "none",
  backgroundColor: "#eee",
  cursor: "pointer",
  transition: "0.2s"
}}
onMouseDown={(e) => e.target.style.transform = "scale(0.95)"}
onMouseUp={(e) => e.target.style.transform = "scale(1)"}
  onClick={() => {
  setInput("おやつを持たせています");
  setTranslated("I put some snacks in their bags today.");
}}
>
  おやつ
</button>
</div>


    <h2 style={{ marginTop: 20, fontSize: 16 }}>
    日本語
    </h2>

     <div style={{
  backgroundColor: "#f9fafb",
  padding: 10,
  borderRadius: 8,
  minHeight: 60,
  marginTop: 5
}}>
  {input || "ここに日本語が表示されます"}
</div>

      
      <h2 style={{ marginTop: 20, fontSize: 16 }}>
      英語
      </h2>

      <p style={{
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 8
      }}>
        {translated}
      </p>

      <button
        style={{
          marginTop: 10,
          width: "100%",
          padding: 10,
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: 8
        }}
        
        onClick={() => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(translated);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = translated;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
}}
        
      >
        コピー
      </button>

      {copied && (
      <p style={{ color: "#4CAF50", marginTop: 5, fontSize: 14 }}>
      コピーしました！
     </p>
)}
      

    </div>
  </div>
);
}