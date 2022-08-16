import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { BsChevronRight } from "react-icons/bs";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { accordion, accordionItem, units } from "./styles";

import "./Sidebar.scss";

// accordion component
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(accordion);

// accordion item-button component
export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<BsChevronRight />} {...props} />
))(accordionItem);

// accordion detail component
export const AccordionDetails = styled(MuiAccordionDetails)({});

const Sidebar = () => {
  // sidebar accordion state
  const [expanded, setExpanded] = React.useState();

  // sidebar accordion handler
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="course__sidebar">
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
