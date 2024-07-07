import React from "react";
import { useSoloContext } from "../../context/SoloContext";
import { Link, useNavigate } from "react-router-dom";

const Characters = ({ el }) => {
  const { del, solo } = useSoloContext();

  const navigate = useNavigate();

  return (
    <div id="characters">
      <div className="container">
        <div className="characters">
          <img src={el.image} alt="img" />
          <div className="charac_txt">
            <h4>Name:{el.name}</h4>
            <h4>Age:{el.age}</h4>
            <h4>Rank:{el.rank}</h4>
          </div>
          <div className="cha_btn">
            <button onClick={() => navigate(`/info/${el.id}`)}>Read</button>
            <button onClick={() => del(el.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
