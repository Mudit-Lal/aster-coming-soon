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
    hover:bg-primary-hover
      text-sm
    text-white
      font-visbyCF
      "
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default button;
