import React from "react";

function CurrentLocation(props) {
  return (
    <svg
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M20 12h2"></path>
      <path d="M2 12h2"></path>
    </svg>
  );
}

export default CurrentLocation;
