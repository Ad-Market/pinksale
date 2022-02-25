import React, { useState } from "react";
import clsx from "clsx";
import $ from "jquery";

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = (e) => {
    const $this = $(e.target);

    $this.siblings(".collapse-body").slideToggle();
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className="collapse">
      <div
        className={clsx("collapse-title", { close: isCollapsed })}
        onClick={toggleCollapse}
      >
        <div>{title}</div>
        <img className="arrow" src="./assets/vectors/arrow.svg" alt="arrow" />
      </div>
      <div className="collapse-body">{children}</div>
    </div>
  );
};

export default Collapse;
