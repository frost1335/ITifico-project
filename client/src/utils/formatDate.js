import moment from "moment";

const formatOption = "DD.MM.YYYY";

export const formatDate = (date) => {
  const newDate = new Date(date);

  const formattedDate = moment(newDate).format(formatOption);

  return formattedDate;
};
