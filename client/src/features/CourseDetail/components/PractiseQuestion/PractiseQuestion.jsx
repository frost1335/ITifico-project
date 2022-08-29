import React from "react";
import { useTranslation } from "react-i18next";

import "./PractiseQuestion.scss";

const PractiseQuestion = ({
  question: { title, description, code },
  index,
}) => {
  const { t } = useTranslation();

  return (
    <div className="practise__question">
      <h3 className="question__title">
        {t("coursedetail_question_title") + ` ${index + 1}`}
      </h3>
      <p className="question__description">{description}</p>
      <pre className="question__code">{`${code}`}</pre>
    </div>
  );
};

export default PractiseQuestion;
