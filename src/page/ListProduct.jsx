import React, { useEffect } from "react";
import { useSoloContext } from "../context/SoloContext";
import Characters from "../components/Characters/Characters";
import Header from "../components/Navbar/Header";
import Search from "./Search";

const ListProduct = () => {
  const { solo, read } = useSoloContext();
  useEffect(() => {
    read();
  }, []);

  return (
    <div id="list">
      <Header />
      <Search />
      <div className="container">
        <div className="search_fill"></div>
        <div className="list">
          {solo ? (
            solo.map((el, id) => <Characters el={el} key={id} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
