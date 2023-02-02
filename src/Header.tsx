import React from "react";

import { data } from "./configs";
import "./index.css";

type Props = {
  // any props you want to pass to the component
};

const Header: React.FC<Props> = (props) => {
  const pathImage = "./" + data.header.image;

  if (data.header.disabled) return null;
  // TODO: resosle why we can't load pathImage in img
  return (
    <div className="header">
      <div className="header__content">
        <img src={require(`${pathImage}`)} className="header__img" />
        <div className="header__text">
          <div className="header__title">{data.header.title}</div>
          <div className="header__description">{data.header.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
