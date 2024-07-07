import React from "react";
import Home from "../components/Home/Home";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../page/ListProduct";
import AddProduct from "../page/AddProduct";
import Info from "../components/info/info";
import StatusCharacters from "../page/StatusCharacters";
import SkillsCharacters from "../page/SkillsCharacters";
import WeaponsCharacters from "../page/WeaponsCharacters";

const MyRoute = () => {
  let SOLO = [
    { link: "/", element: <Home />, id: 1 },
    { link: "*", element: <Home />, id: 1 },
    { link: "/add", element: <AddProduct />, id: 2 },
    { link: "/characters", element: <ListProduct />, id: 3 },
    { link: "/info/:id", element: <Info />, id: 4 },
    { link: "/status", element: <StatusCharacters />, id: 6 },
    { link: "/skills", element: <SkillsCharacters />, id: 7 },
    { link: "/weapons", element: <WeaponsCharacters />, id: 8 },
  ];

  return (
    <Routes>
      {SOLO.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MyRoute;
