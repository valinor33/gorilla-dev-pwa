import React from "react";

function IconLink(url, path) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {path}
      </svg>
    </a>
  );
}

export default IconLink;
