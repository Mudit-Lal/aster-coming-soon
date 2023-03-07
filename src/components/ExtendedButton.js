import React from "react";

const extendedButton = (props) => (
  <button
    className="
      min-w-extended
      min-h-normal
      px-5
      py-1
      rounded-small
    bg-white
      font-medium
      text-sm
    text-primary
      font-visbyCF
      "
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default extendedButton;
