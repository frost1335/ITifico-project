import React from "react";
import { styled } from "@mui/material/styles";
import { BsChevronRight } from "react-icons/bs";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "#FFFFFF",
  "& .MuiButtonBase-root.Mui-expended": {
    background: "#E36F59",
  },
  "&:before": {
    display: "none",
  },
  overflow: "hidden",
  "& .MuiAccordionSummary-root": {
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  },
  "&:first-child .MuiAccordionSummary-root:first-child": {
    borderTop: "none",
  },
  "&  .MuiTypography-root": {
    lineHeight: "18px",
    color: "#23262D",
    fontWeight: 600,
    fontSize: "16px",
    "& .menu__num": {
      fontWeight: 600,
      color: "#E36F59",
      marginRight: 8,
    },
  },
  "& .MuiAccordionSummary-root.Mui-expanded": {
    background: "#E36F59",
    "& .MuiTypography-root": {
      color: "#fff",
      "& .menu__num": {
        color: "#fff",
      },
    },
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<BsChevronRight />} {...props} />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    display: "none",
  },
  "& .MuiAccordionSummary-content": {
    margin: "20px 0 23px 0",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "80%",
}));

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="sidebar">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="sidebar__item"
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="item__title"
        >
          <Typography>
            <span className="menu__num">01.</span> Вступ до C#
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="item__body">
          <ul className="body__menu">
            <li className="menu__item">
              <Link to="/">1. Класи та об'єкти</Link>
            </li>
            <li className="menu__item">
              <Link to="/">2. Конструкції</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
