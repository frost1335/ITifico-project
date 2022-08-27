import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import {
  AccordionButtonStyles,
  AccordionDetailStyles,
  AccordionStyle,
} from "./accordionStyles";
import "./Navbar.scss";
import styled from "@emotion/styled";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(AccordionStyle);

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={/* icon */ "icon"} {...props} />
))(AccordionButtonStyles);

const AccordionDetails = styled(MuiAccordionDetails)(AccordionDetailStyles);

const Navbar = () => {
  const [navMenu, setNavMenu] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setNavMenu(newExpanded ? panel : false);
  };

  // return (
  //   <div className="container">
  //     <div className={`navbar__bg ${navMenu && "open"}`}>
  //       <div className="navbar__accordion">
  //         <Accordion
  //           expanded={navMenu}
  //           onChange={handleChange(true)}
  //           className="accordion"
  //         >
  //           <AccordionSummary
  //             aria-controls="panel1d-content"
  //             id="accordion__button"
  //           >
  //             <div className="button__content">
  //               <Link to="/" className="navbar__logo">
  //                 <img src={logo} alt="navbar-logo" />
  //               </Link>
  //               <div className="item__lng">
  //                 <button className="lng__button lng__button--active">
  //                   UKR
  //                 </button>
  //                 <button className="lng__button">ENG</button>
  //               </div>
  //             </div>
  //           </AccordionSummary>
  //           <AccordionDetails>
  //             <Typography>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  //               eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  //               eget.
  //             </Typography>
  //           </AccordionDetails>
  //         </Accordion>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="navbar--logo" />
          </Link>
        </div>
        <div className="navbar__menu">
          <ul className="menu">
            <li className="menu__item">
              <Link to="/blog">Блог</Link>
            </li>
            <li className="menu__item">
              <Link to="/courses">Курси</Link>
            </li>
            <li className="menu__item">
              <Link to="/about">Про мене </Link>
            </li>
            <li className="menu__item">
              <Link to="/" state={"subscribe"}>
                Підписка на сайт
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/support">Підтримка</Link>
            </li>
            <li className="menu__item menu__item--lng">
              <div className="item__lng">
                <button className="lng__button lng__button--active">UKR</button>
                <button className="lng__button">ENG</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
