import React from "react";

import { Sun } from "../icons/icons";
import "../index.scss";

type Props = {
  // any props you want to pass to the component
};

const Footer: React.FC<Props> = (props) => {
  return (
    <div className="footer">
      <div className="footer__content">
        <Sun />
      </div>
    </div>
  );
};

export default Footer;
