import React from "react";
import logo2 from "../../img/81ZAC67DE1S._AC_UF1000,1000_QL80_.jpg";
import { Link, useHref, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero_txt">
            <h1>Solo Leveling</h1>
            <p>
              Ten years ago, our familiar world fell into oblivion, changing{" "}
              <br />
              forever, when the surrounding worlds, the Gates, connected the{" "}
              <br />
              living Earths with a magical reality where all kinds of monsters{" "}
              <br />
              live. These monsters poured into the city, and they would have to{" "}
              <br />
              show human evil if they appeared with the appearance of the gates{" "}
              <br />
              and monsters. A select few people were not blessed with superhuman{" "}
              <br />
              abilities that enabled them to withstand blows. Such people were{" "}
              <br />
              called Hunters, the strongest of those whom the guilds managed to{" "}
              <br />
              gather, and began to professionally engage in killing monsters and{" "}
              <br />
              finding treasures.
            </p>
            <div className="btn">
              <a href="https://en.wikipedia.org/wiki/Solo_Leveling">Read ...</a>
              <button onClick={() => navigate("/characters")}>
                Characters
              </button>
            </div>
          </div>
          <div className="btn_img">
            <img src={logo2} alt="img" />
            <a href="https://mangalib.org/i-alone-level-up?section=info">
              Read...
            </a>
            {/* <button>Read...</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
