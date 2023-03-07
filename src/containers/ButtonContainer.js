import React, { useState } from "react";

import VisitIcon from "../components/UI/VisitLogo";

import Button from "../components/Button";
import ExtendedButton from "../components/ExtendedButton";
import Divider from "../components/Divider";

function ButtonContainer() {
  const expandedContactButton = (
    <ExtendedButton>
      <div
        className="
              flex
              flex-row
              flex-nowrap
              justify-between
            "
      >
        <span
          className="
                hover:underline
                py-1
              "
        >
          +91 9129160070
        </span>
        <Divider />
        <a
          className="
                hover:underline
                py-1
              "
          href="tel:602-693-2521"
        >
          +1 (602) 693-2521
        </a>
        <Divider />
        <a
          className="
                hover:underline
                py-1
              "
          href="mailto:mudit@aster.vision"
        >
          mudit@aster.vision
        </a>
      </div>
    </ExtendedButton>
  );

  let toggleButton = () => {
    console.log("Called");
    setContactButton(expandedContactButton);
  };

  const minifiedContactButton = (
    <Button onClick={toggleButton}>Connect with us</Button>
  );

  const [contactButton, setContactButton] = useState(minifiedContactButton);

  return (
    <div
      className="
          pt-6
          max-w-container-extended
          min-w-container-extended
          flex
          flex-row
          flex-nowrap
          container
        "
    >
      <button
        className="
          min-w-[163px]
          min-h-normal
          pl-[20px]
          pr-[18px]
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
        "
      >
        <div
          className="
              flex
              flex-row
              flex-nowrap
              justify-between
            "
        >
          <a className="pr-1" href="https://www.instagram.com/aster.vision/">
            See our work
          </a>
          <div className="h-max my-auto mr-1">
            <VisitIcon className="-pr-[1px]" />
          </div>
        </div>
      </button>
      <div
        className="
            min-w-xs
          "
      />
      {contactButton}
    </div>
  );
}

export default ButtonContainer;
