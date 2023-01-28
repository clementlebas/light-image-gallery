import React from "react";

import "./index.css";

type Props = {
  // any props you want to pass to the component
};

const Header: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <div>Picture</div>
      <div>Description</div>
    </div>
  );
};

export default Header;
