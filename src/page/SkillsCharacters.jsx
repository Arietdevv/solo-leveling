import React from "react";
import Header from "../components/Navbar/Header";
import { useSoloContext } from "../context/SoloContext";
import { useNavigate } from "react-router-dom";

const SkillsCharacters = () => {
  const { oneSolo, getOneSolo } = useSoloContext();
  const navigate = useNavigate();

  return (
    <div id="info">
      <Header />
      <img className="img1" src={oneSolo.back} alt="img" />
      <div className="container">
        <div className="info">
          <div className="info_txt">
            <h4>
              Rank:<span className="rank">{oneSolo.rank}</span>
            </h4>
            <h2>
              Name:<span className="name">{oneSolo.name}</span>
            </h2>
            <p>{oneSolo.skills}</p>
          </div>
          <img src={oneSolo.imgSkill} alt="img" />
          <div className="info_nav">
            <ul>
              <li onClick={() => navigate(`/info/${oneSolo.id}`)}>
                <span>About</span>
              </li>
              <li onClick={() => navigate("/status")}>
                <span>Status</span>
              </li>
              <li onClick={() => navigate("/skills")}>
                <span>Skills</span>
              </li>
              <li onClick={() => navigate("/weapons")}>
                <span>Weapons</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCharacters;
