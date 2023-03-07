import React from "react";

const button = (props) => (
  <button
    className="
      min-w-normal
      min-h-normal
      px-5
      py-2
      rounded-small
    bg-primary
    hover:bg-white
    hover:text-primary
      text-sm
    text-white
      font-visbyCF
      font-medium
      fill-white
      hover:fill-primary
      {props.className}
      "
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default button;
