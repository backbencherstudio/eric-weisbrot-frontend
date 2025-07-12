import React from "react";

const FacebookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_5428_2241)">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#162F73"
        />
        <path
          d="M25.028 20.7828H21.4592V33.857H16.0523V20.7828H13.4807V16.188H16.0523V13.2146C16.0523 11.0883 17.0623 7.75879 21.5074 7.75879L25.5125 7.77555V12.2356H22.6065C22.1298 12.2356 21.4596 12.4738 21.4596 13.488V16.1922H25.5004L25.028 20.7828Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5428_2241">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
