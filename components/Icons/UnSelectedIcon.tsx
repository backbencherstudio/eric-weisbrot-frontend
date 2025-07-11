import React from "react";

const UnSelectedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      className={className}
    >
      <circle cx="8" cy="8.5" r="7.5" stroke="#0780DF" />
    </svg>
  );
};

export default UnSelectedIcon;
