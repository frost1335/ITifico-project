import React from "react";

import "./PractiseQuestion.scss";

const PractiseQuestion = ({ question: { title, description, code } }) => {
  return (
    <div className="practise__question">
      <h3 className="question__title">{title}</h3>
      <p className="question__description">{description}</p>
      <pre className="question__code">{`${code}`}</pre>
    </div>
  );
};

export default PractiseQuestion;
