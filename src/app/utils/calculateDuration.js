import { monthToNumber } from "./constants";
import PropTypes from "prop-types";

export const calculateDuration = (startMonth, stateYear, endMonth, endYear) => {
  const startDate = new Date(stateYear, monthToNumber[startMonth]);
  const endDate = endMonth && endYear
    ? new Date(endYear, monthToNumber[endMonth])
    : new Date(); // Present

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();
  const totalMonths = yearsDiff * 12 + (monthsDiff + 1); // duration is inclusive to end month

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
