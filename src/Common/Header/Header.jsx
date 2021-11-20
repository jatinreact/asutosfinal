import React, { useState } from "react";

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//css file
import "./Header.css";

const Header = (props) => {
  /*local state */
  const [Sidebar, setSidebar] = useState(false);

  /*function to open a sidebar */
  const setLoadingnewside = () => {
    document.getElementById("mySidenav").style.width = "250px";
    setSidebar(true);
  };

  /*function to close a sidebar */
  const Closesidebar = () => {
    document.getElementById("mySidenav").style.width = "0px";
    setSidebar(false);
  };
  return (
    <div className="topheader">
      <AppBar position="fixed" className="MainHeader">
        <Toolbar className="header_padding">
          <div className="header_link_color">
            <img src="images/logo.png" alt="" className="img-fluid" />
          </div>
          <div className="header_grow" />
          <div className="header_links">
            <span
              className="header_link_color"
              onClick={() => props.history.push("#")}
            >
              <div class="dropdown">
                <div
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  HOME
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </span>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </div>

            <span
              className="header_link_color"
              onClick={() => props.history.push("#")}
            >
              DISCOVER
            </span>
            <span
              className="header_link_color"
              onClick={() => props.history.push("#")}
            >
              LEARN
            </span>
            <span
              className="header_link_color"
              onClick={() => props.history.push("#")}
            >
              EXPERIENCE
            </span>
            <span
              className="header_link_color"
              onClick={() => props.history.push("#")}
            >
              CELEBRATE WITH US
            </span>
            <span
              className="header_link_color"
              onClick={() => props.history.push("#")}
            >
              CONNECT
            </span>
          </div>
          <div className="mobile_Burger_Menu">
            <span
              className="logout_Pointer_cursor mr-3 text-right mt-2"
              onClick={!Sidebar ? setLoadingnewside : Closesidebar}
            >
              <i class="fa fa-bars"></i>
            </span>

            <div id="mySidenav" className="sidenav">
              <div className="cross_icon_style">
                <i
                  class="fa fa-times cursor"
                  onClick={() => {
                    document.getElementById("mySidenav").style.width = "0px";
                    setSidebar(false);
                  }}
                ></i>
              </div>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                Home
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                Features
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                Supports
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                About Us
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                Resources
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                Contact Us
              </span>
              <span
                className="logout_Pointer_cursor"
                onClick={() => props.history.push("#")}
              >
                Login
              </span>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
