import moment from "moment";

const formatOption = "M.DD.YYYY";

export const formatDate = (date) => {
  const newDate = new Date(date);

  const formattedDate = moment(newDate).format(formatOption);

  return formattedDate;
};
