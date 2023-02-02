import React from "react";

import { data } from "../configs";
import { Github, Twitter, Linkedin } from "../icons/icons";
import "../index.scss";

type Props = {
  // any props you want to pass to the component
};

const Header: React.FC<Props> = (props) => {
  const pathImage = data.header.image;

  if (data.header.disabled) return null;
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__profile">
          <img src={pathImage} className="header__img" />
          <div className="header__text">
            <div className="header__title">{data.header.title}</div>
            <div className="header__description">{data.header.description}</div>
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
