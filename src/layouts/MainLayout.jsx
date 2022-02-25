import { useState } from "react";
import clsx from "clsx";

import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

const MainLayout = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={clsx("dark-overlay", { close: !isSideNavOpen })}></div>
      <Navbar isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <div id="main-layout">
        <SideNav isSideNavOpen={isSideNavOpen} />
        <div id="right-main">
          <div className="trending">
            <div className="main">
              <div className="item d-flex">
                <img
                  className="me-2"
                  src="./assets/vectors/trending.svg"
                  alt="trending"
                />
                <div className="fs-16 fw-500">Trending</div>
              </div>
              {[
                {
                  name: "ETHSOL",
                },
                {
                  name: "METAKAT",
                },
                {
                  name: "WEB3",
                },
                {
                  name: "MAMA",
                },
                {
                  name: "SOFT",
                },
                {
                  name: "MCW",
                },
                {
                  name: "PLH",
                },
                {
                  name: "GTC",
                },
                {
                  name: "DNDB",
                },
                {
                  name: "BBL",
                },
                {
                  name: "NOE",
                },
                {
                  name: "FCT",
                },
              ].map((el, idx) => {
                const { name } = el;

                return (
                  <div key={"trending" + idx} className="item">
                    <span className="num">#{idx + 1} </span>
                    <a href="#0" className="inv">
                      {name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="main-content">{children}</div>
          <div className="copyright">
            Disclaimer: The information provided shall not in any way constitute
            a recommendation as to whether you should invest in any product
            discussed. We accept no liability for any loss occasioned to any
            person acting or refraining from action as a result of any material
            provided or published.
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
