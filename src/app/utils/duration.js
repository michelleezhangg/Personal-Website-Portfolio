import { monthToNumber } from "./constants";
import PropTypes from "prop-types";

export const calculateDuration = (startMonth, stateYear, endMonth, endYear) => {
  const startDate = new Date(stateYear, monthToNumber[startMonth]);
  const endDate =
    endMonth && endYear
      ? new Date(endYear, monthToNumber[endMonth])
      : new Date(); // Present

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();

  // Edge case: end date starts before start date
  if (yearsDiff < 0 || monthsDiff < 0) return { years: 0, months: 0 };

  const totalMonths = yearsDiff * 12 + (monthsDiff + 1); // months are inclusive

  if (totalMonths < 12) return { years: 0, months: totalMonths };

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};

calculateDuration.propTypes = {
  startMonth: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endMonth: PropTypes.string, // Not required
  endYear: PropTypes.string, // Not required
};

export const displayDuration = (startMonth, stateYear, endMonth, endYear) => {
  const { years, months } = calculateDuration(
    startMonth,
    stateYear,
    endMonth,
    endYear,
  );

  const duration =
    (years > 0 ? `${years} year` : "") +
    (years > 1 ? "s" : "") +
    (years > 0 && months > 0 ? ", " : "") +
    (months > 0 ? `${months} month` : "") +
    (months > 1 ? "s" : "");

  return duration;
};

displayDuration.propTypes = {
  startMonth: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endMonth: PropTypes.string, // Not required
  endYear: PropTypes.string, // Not required
};
