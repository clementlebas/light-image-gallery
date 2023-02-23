import React from "react";

import { header, social } from "../configs/data";
import { Github, Twitter, Linkedin } from "../icons/icons";
import "../index.scss";

type Props = {
  className: string;
};

const Header: React.FC<Props> = ({ className }) => {
  const pathImage = header.image;

  if (header.disabled) return null;
  return (
    <div className={`header ${className}`}>
      <div className="header__content">
        <div className="header__profile">
          {pathImage && <img src={pathImage} className="header__img" />}
          <div className="header__text">
            <div className="header__title">{header?.title}</div>
            <div className="header__description">{header?.description}</div>
          </div>
        </div>
        {!social.disabled && (
          <div style={{ display: "flex" }}>
            {social.github && <Github />}
            {social.twitter && <Twitter />}
            {social.linkedin && <Linkedin />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
