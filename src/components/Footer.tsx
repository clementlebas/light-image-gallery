import React from "react";

import { Sun } from "../icons/icons";
import "../index.scss";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (a: boolean) => void;
  // any props you want to pass to the component
};

const Footer: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div
          onClick={() => {
            localStorage.setItem("mode", isDarkMode ? "light" : "dark");
            setIsDarkMode(!isDarkMode);
          }}
          style={{ display: "flex" }}
        >
          <Sun />
        </div>
      </div>
    </div>
  );
};

export default Footer;
