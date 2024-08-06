import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({text,setText}) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("no <script> tag allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("no @ tag allowed!");
      newText = newText.replace("@", "");
    }else{
      setWarningText("")
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}
