import React from "react";

import { ExternalLink, Sun } from "../icons/icons";
import "../index.scss";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (a: boolean) => void;
  isDialogOpen: boolean;
};

const Footer: React.FC<Props> = ({
  isDarkMode,
  setIsDarkMode,
  isDialogOpen,
}) => {
  return (
    <div className="footer">
      <div
        className={`footer__content ${
          isDialogOpen ? "footer--dialog-open" : ""
        }`}
      >
        <a
          target="_blank"
          href="https://github.com/clementlebas/light-photo-gallery"
          className="footer__link"
        >
          <div>Get your gallery</div>
          <div>
            <ExternalLink />
          </div>
        </a>
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
