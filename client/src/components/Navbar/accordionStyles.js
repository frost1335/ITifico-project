export const AccordionStyle = {
  border: `1px solid #444`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
};

export const AccordionButtonStyles = {
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    display: "flex",
    justifyContent: "flex-end",
    "&.Mui-expanded": {
      color: "red",
      transform: 'rotate(0)'
    },
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
};

export const AccordionDetailStyles = {
  padding: 10,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
};
