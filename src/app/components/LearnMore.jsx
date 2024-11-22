import React, { useState } from "react";
import PropTypes from "prop-types";

const LearnMore = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-2">
      <span className="text-xs text-slate-600">
        {isExpanded && <p>{description}</p>}
      </span>
      <button
        className="font-medium text-sm text-darkblue cursor-pointer hover:underline"
        onClick={handleToggle}
      >
        {isExpanded ? "Show Less" : "Learn More"}
      </button>
    </div>
  );
};

LearnMore.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LearnMore;
