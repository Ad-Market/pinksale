import React from "react";
import clsx from "clsx";

const Dropdown = ({ children, dropdownItems, accent }) => {
  return (
    <div className={clsx("dropdown", { accent })}>
      {children}
      <div className="dropdown-items">
        {dropdownItems && (
          <ul className="dropdown-items-main">
            {dropdownItems.map((el, idx) => {
              return <li key={"dropdown-item" + Math.random() + idx}>{el}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
