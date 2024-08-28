import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSoloContext } from "../context/SoloContext";

const Search = () => {
  // const { read } = useSoloContext();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const [search, setSearch] = useState(searchParams.get("q"));

  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //   });
  // }, [search]);

  // useEffect(() => {
  //   read();
  // }, [search]);

  return (
    <div id="search">
      <div className="container">
        <div className="search">
          <input
            // onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
