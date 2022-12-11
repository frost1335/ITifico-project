import React from "react";
import { useParams } from "react-router-dom";
import PractiseAccordion from "../../components/PractiseAccordion/PractiseAccordion";
import PractiseQuestion from "../../components/PractiseQuestion/PractiseQuestion";
import { useTranslation } from "react-i18next";

import "./Practise.scss";
import { Loader } from "../../../../components";
import { useSelector } from "react-redux";
import { useGetByLessonQuery } from "../../../../services/practiseApi";

const Practise = () => {
  const { t } = useTranslation();
  const { lessonId } = useParams();
  const { data: practise, isLoading } = useGetByLessonQuery(lessonId);
  const { lng } = useSelector((state) => state.lngDetect);
  const [collapse, setCollapse] = React.useState(false);

  if (isLoading) return <Loader />;
  if (!practise?.data && !isLoading) return null;
  // if (!practise?.data && !isLoading)
  //   return <p className="empty__message">{t("practise_empty_message")}</p>;

  return (
    <div className="course__practise">
      <PractiseAccordion
        setCollapse={setCollapse}
        collapse={collapse}
        title={t("coursedetail_practise_title")}
        className="practise__container"
      >
        {isLoading ? (
          "Loading..."
        ) : practise?.data ? (
          practise?.data?.[lng].fields.map((field, index) => (
            <React.Fragment key={index + "practise-fields"}>
              <PractiseQuestion question={field.question} index={index} />
              <PractiseAccordion answer={field.answer} />
            </React.Fragment>
          ))
        ) : (
          <p>Practise items not found</p>
        )}
        <div className="container__bottom">
          <button onClick={() => setCollapse(true)} className="bottom__link">
            {t("coursedetail_collapse_text")}
          </button>
        </div>
      </PractiseAccordion>
    </div>
  );
};

export default Practise;
