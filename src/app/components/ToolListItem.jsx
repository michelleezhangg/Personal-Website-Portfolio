import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ToolListItem = ({ name, path, isMd }) => {
  return (
    <div className="flex flex-row gap-8 items-center">
      <Image
        src={path}
        alt={`${name} Icon`}
        className="lg:text-sm text-xs font-light"
        width={isMd ? 40 : 30}
        height={isMd ? 40 : 30}
      />
      <p className="text-xs font-semibold">{name}</p>
    </div>
  );
};

ToolListItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isMd: PropTypes.bool.isRequired,
};

export default ToolListItem;
