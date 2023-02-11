import React from "react";

import { header } from "../configs/data";
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
          <img src={pathImage} className="header__img" />
          <div className="header__text">
            <div className="header__title">{header.title}</div>
            <div className="header__description">{header.description}</div>
          </div>
        </div>
        <div>
          <Github />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Header;
