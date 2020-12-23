import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  //console.log("here" + id.info);
  const [infoVisiility, setInfoVisibility] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setInfoVisibility(!infoVisiility)}>
          {infoVisiility ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {infoVisiility && <p>{info}</p>}
    </article>
  );
};

export default Question;
