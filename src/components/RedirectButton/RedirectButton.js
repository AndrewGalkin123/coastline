import React from "react";
import { useHistory } from "react-router-dom";

const RedirectButton = ({ to, children }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return <button className="photos_link" onClick={handleClick}>{children}</button>;
};

export default RedirectButton;
