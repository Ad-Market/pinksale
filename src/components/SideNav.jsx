import React from "react";
import clsx from "clsx";

import isEmpty from "../utils/is-empty";

const SideNav = ({ isSideNavOpen }) => {
  return (
    <div id="sidenav" className={clsx({ close: !isSideNavOpen })}>
      <div className="nav">
        {[
          {
            icon: "./assets/vectors/home.svg",
            text: "Home",
          },
          {
            icon: "./assets/vectors/launchpads.svg",
            text: "Launchpads",
            subNavs: [
              {
                text: "Create Launchpad",
              },
              {
                text: "Create fair launch",
              },
              {
                text: "Create token",
              },
              {
                text: "Launchpad list",
              },
            ],
          },
        ].map((el, idx) => {
          const { icon, text, subNavs } = el;

          return (
            <div key={"nav-items" + idx} className="item">
              <a href="#0" className="item-main">
                <div className="img">
                  <img src={icon} alt="home" />
                </div>
                <div className="text">{text}</div>
              </a>
              {!isEmpty(subNavs) && (
                <div className="sub-links">
                  {subNavs.map((el, idx2) => {
                    const { text } = el;

                    return (
                      <div key={"nav-" + idx + idx2} className="item-main">
                        <div className="img"></div>
                        <a className="text" href="#0">
                          {text}
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
