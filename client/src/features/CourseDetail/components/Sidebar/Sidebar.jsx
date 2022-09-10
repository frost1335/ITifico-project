import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { accordion, accordionItem, units } from "./styles";
import { useTranslation } from "react-i18next";

import "./Sidebar.scss";
import { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import { tabletMaxWidth } from "../../../../constants";

// accordion component
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(accordion);

// accordion item-button component
export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<GoTriangleRight />} {...props} />
))(accordionItem);

// accordion detail component
export const AccordionDetails = styled(MuiAccordionDetails)({});

const Sidebar = () => {
  const { t } = useTranslation();

  const [sidebarExpended, setSidebarExpended] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // sidebar accordion state
  const [expanded, setExpanded] = React.useState("");
  const [menuList, setMenuList] = React.useState("");

  // sidebar accordion handler
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const hanleMenuChange = (panel) => (event, newExpanded) => {
    setMenuList(newExpanded ? panel : false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (windowWidth > tabletMaxWidth) {
      setMenuList("menu-sidebar-list");
    } else {
      setMenuList("");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (menuList === "menu-sidebar-list" && windowWidth < tabletMaxWidth) {
      setSidebarExpended(true);
      document.querySelector("body").style.overflow = "hidden";
    } else {
      setSidebarExpended(false);
      document.querySelector("body").style.overflow = "unset";
    }
  }, [menuList, windowWidth]);

  return (
    <div className="sidebar__box">
      <div className="course__sidebar">
        <div
          className={`sidebar__bg ${sidebarExpended ? " fixed" : ""}`}
          onClick={hanleMenuChange("menu-sidebar-list")}
        />
        <Accordion
          expanded={menuList === "menu-sidebar-list"}
          onChange={hanleMenuChange("menu-sidebar-list")}
          key={"menu-sidebar-list"}
          className="menu-sidebar-list"
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="sidebar-menu-list"
          >
            <Typography>{t("coursedetail_sidebar_menu_title")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
                    <Typography className="title__text">
                      {" "}
                      {unit.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="item__body">
                    <ol className="body__menu">
                      {unit.lessons.length ? (
                        unit.lessons.map((lesson, index) => (
                          <li
                            className="menu__item"
                            key={index + "lesson-item"}
                          >
                            <NavLink
                              to={`/courses/view/${unit._id}/${lesson._id}`}
                            >
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
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
