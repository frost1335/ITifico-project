import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./PractiseQuestion.scss";

const highlighterStyles = {
  padding: "0 13px",
  background: "#F7F8FA",
  fontFamily: "Consolas",
  fontWeight: 400,
};
const highlighterLineNumbersStyles = {
  color: "#A0A1A6",
  padding: "4px 12px 4px 0",
  marginRight: 10,
  borderRight: "2px solid #75B687",
};

const PractiseQuestion = ({
  question: { language, description, code },
  index,
}) => {
  const { t } = useTranslation();
  const questionDescription = useRef(null);

  useEffect(() => {
    questionDescription.current.innerHTML = description || "";
  });

  return (
    <div className="practise__question">
      <h3 className="question__title">
        {t("coursedetail_question_title") + ` ${index + 1}`}
      </h3>
      <p className="question__description" ref={questionDescription}>
        {description}
      </p>
      {code ? (
        <SyntaxHighlighter
          className="question__code"
          customStyle={highlighterStyles}
          showLineNumbers={true}
          lineNumberStyle={highlighterLineNumbersStyles}
          language={language}
          style={atelierForestLight}
        >
          {`${code}`}
        </SyntaxHighlighter>
      ) : (
        ""
      )}
    </div>
  );
};

export default PractiseQuestion;
