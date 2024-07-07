import React, { useState } from "react";
import Header from "../components/Navbar/Header";
import { useSoloContext } from "../context/SoloContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { create } = useSoloContext();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rank, setRank] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");
  const [back, setBack] = useState("");
  const [characters, setCharacters] = useState("");
  const [skills, setSkills] = useState("");
  const [status, setStatus] = useState("");
  const [weapons, setWeapons] = useState("");
  const [imgSkill, setImgSkill] = useState("");
  const [imgStatus, setImgStatus] = useState("");
  const [imgWeapons, setImgWeapons] = useState("");

  function add() {
    let newSolo = {
      name: name,
      age: age,
      rank: rank,
      image: image,
      descr: descr,
      back: back,
      characters: characters,
      skills: skills,
      status: status,
      weapons: weapons,
      imgSkill: imgSkill,
      imgStatus: imgStatus,
      imgWeapons: imgWeapons,
    };
    create(newSolo);
    navigate("characters");
  }

  return (
    <div id="create">
      <Header />
      <div className="container">
        <div className="create">
          <h2>Create</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          <input
            type="text"
            placeholder="Rank"
            onChange={(e) => setRank(e.target.value)}
            value={rank}
          />
          <input
            type="text"
            placeholder="Image Url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input
            type="text"
            placeholder="Descr"
            onChange={(e) => setDescr(e.target.value)}
            value={descr}
          />{" "}
          <input
            type="text"
            placeholder="Back"
            onChange={(e) => setBack(e.target.value)}
            value={back}
          />{" "}
          <input
            type="text"
            placeholder="Characters"
            onChange={(e) => setCharacters(e.target.value)}
            value={characters}
          />
          <input
            type="text"
            placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
          <input
            type="text"
            placeholder="Img URL Status"
            onChange={(e) => setImgStatus(e.target.value)}
            value={imgStatus}
          />
          <input
            type="text"
            placeholder="Skills"
            onChange={(e) => setSkills(e.target.value)}
            value={skills}
          />
          <input
            type="text"
            placeholder="Img URL Skill"
            onChange={(e) => setImgSkill(e.target.value)}
            value={imgSkill}
          />
          <input
            type="text"
            placeholder="Weapons"
            onChange={(e) => setWeapons(e.target.value)}
            value={weapons}
          />
          <input
            type="text"
            placeholder="Img URL Weapons"
            onChange={(e) => setImgWeapons(e.target.value)}
            value={imgWeapons}
          />
          <button onClick={add}>create</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
