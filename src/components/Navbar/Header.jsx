import React from "react";
import logo from "../../img/Logo_FR_Solo_Leveling.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="head_img_txt">
            <img src={logo} alt="img" />
            <div className="head_txt">
              <Link to="/">
                <h3>Home</h3>
              </Link>
              <Link to="/characters">
                <h3>Characters</h3>
              </Link>
              <Link to="/add">
                <h3>Create</h3>
              </Link>
            </div>
          </div>
          <div className="head_regis">
            <button>Sign In</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
