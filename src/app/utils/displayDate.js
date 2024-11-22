import PropTypes from "prop-types";
import { monthToNumber } from "./constants";

export const displayDate = (startMonth, startYear, endMonth, endYear) => {
  // Empty string if end date is before start date
  if (
    endYear < startYear ||
    (monthToNumber[endMonth] < monthToNumber[endYear] && endYear <= startYear)
  )
    return "";

  // No end date, present
  if (!endMonth || !endYear) return `${startMonth} ${startYear} - Present`;

  // Special case: 1 month
  if (startMonth === endMonth && startYear === endYear)
    return `${startMonth} ${startYear}`;

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

displayDate.propTypes = {
  startMonth: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endMonth: PropTypes.string, // Not required
  endYear: PropTypes.string, // Not required
};
