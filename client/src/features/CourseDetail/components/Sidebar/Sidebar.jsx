import React from "react";
import Typography from "@mui/material/Typography";

import "./Sidebar.scss";
import { NavLink, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  units,
} from "../accordion";

const Sidebar = () => {
  const params = useParams();
  const [expanded, setExpanded] = React.useState(params.unitId);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="sidebar">
      {units.length ? (
        units.map((unit, idx) => (
          <Accordion
            expanded={expanded === unit._id}
            onChange={handleChange(unit._id)}
            className="sidebar__item"
            key={unit._id + idx}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="item__title"
            >
              <Typography className="title__text"> {unit.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="item__body">
              <ol className="body__menu">
                {unit.lessons.length ? (
                  unit.lessons.map((lesson, index) => (
                    <li className="menu__item" key={index + "lesson-item"}>
                      <NavLink to={`/courses/view/${unit._id}/${lesson._id}`}>
                        {lesson.title}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <p>Lessons not found</p>
                )}
              </ol>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <p>Items not found</p>
      )}
    </div>
  );
};

export default Sidebar;
