import React from "react";

import "./index.css";

type Props = {
  // any props you want to pass to the component
};

const Footer: React.FC<Props> = (props) => {
  return (
    <div className="footer">
      <div className="footer__content">Light</div>
    </div>
  );
};

export default Footer;
