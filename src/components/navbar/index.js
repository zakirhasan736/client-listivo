import React, { useState } from "react";
import Linked from "@elements/linked";
import Logo from "./logo";
import Button from "../elements/button";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { Drawer, Grid } from "antd";
const { useBreakpoint } = Grid;
function Navbar({}) {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  return (
    <header className="header-section">
      <div className="custom-container">
        {screens.lg ? (
          <div className="header-main-wrapper">
            <div className="header-nav-content">
              <div className="navbar-logo-box">
                <Logo
                  logoType="secondary-logo"
                  src="/image/logo_dark2.png.svg"
                  Width="112"
                  height="55"
                  alt="header brand logo"
                />
                <Logo
                  logoType="primary-logo"
                  src="/image/logo_dark-1.svg"
                  Width="112"
                  height="55"
                  alt="header brand logo"
                />
              </div>
              <nav className="navbar-nav-box">
                <ul className="nav-item-box">
                  <li className="nav-list">
                    <Linked href={"/"} title="Home" />
                  </li>
                  <li className="nav-list">
                    <Linked href={"/search"} title="Search" />
                  </li>
                  <li className="nav-list">
                    <Linked href={"/pricing"} title="Pricing" />
                  </li>
                  <li className="nav-list">
                    <Linked href={"/about"} title="About" />
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-button-content">
              <div className="nav-auth-btn-widgets">
                <span className="auth-user-icons">
                  <AiOutlineUser />
                </span>
                <div className="auth-user-btn">
                  <button className="auth-btn log-user-btn">Log In</button>
                  <span className="divider"></span>
                  <button className="auth-btn reg-user-btn">Register</button>
                </div>
              </div>
              <div className="post-ad-button">
                <Button
                  butVerient="primary-button"
                  btnText="Post Your Ad"
                  btnsIcon={<AiOutlinePlus />}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="header-main-wrapper header-mobile-version">
            <div className="mobo-left-content">
              <button
                type="primary"
                onClick={showDrawer}
                className="nav-trigger-btn-widgets"
              >
                <span className="trigger-user-icons">
                  <HiBars3 />
                </span>
              </button>
              <Drawer
                placement="left"
                onClose={onClose}
                open={open}
                className="left-content-mobo"
              >
                <nav className="navbar-nav-box">
                  <ul className="nav-item-box">
                    <li className="nav-list">
                      <Linked href={"/"} title="Home" />
                    </li>
                    <li className="nav-list">
                      <Linked href={"/search"} title="Search" />
                    </li>
                    <li className="nav-list">
                      <Linked href={"/pricing"} title="Pricing" />
                    </li>
                    <li className="nav-list">
                      <Linked href={"/about"} title="About" />
                    </li>
                  </ul>
                </nav>
              </Drawer>
            </div>

            <div className="header-nav-content">
              <div className="navbar-logo-box">
                <Logo
                  src="/image/logo_dark-1.svg"
                  Width="112"
                  height="55"
                  alt="header brand logo"
                />
              </div>
            </div>

            <div className="nav-auth-btn-content">
              <button
                type="primary"
                onClick={showDrawer2}
                className="nav-auth-btn-widgets"
              >
                <span className="auth-user-icons">
                  <AiOutlineUser />
                </span>
              </button>
              <Drawer
                placement="right"
                onClose={onClose}
                open={open2}
                className="right-content-mobo"
              >
                <div className="auth-user-btn">
                  <button className="auth-btn log-user-btn">Log In</button>
                  <span className="divider"></span>
                  <button className="auth-btn reg-user-btn">Register</button>
                </div>
                <div className="post-ad-button">
                  <Button
                    butVerient="primary-button"
                    btnText="Post Your Ad"
                    btnsIcon={<AiOutlinePlus />}
                  />
                </div>
              </Drawer>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
