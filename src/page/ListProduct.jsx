import React, { useEffect, useState } from "react";
import { useSoloContext } from "../context/SoloContext";
import Characters from "../components/Characters/Characters";
import Header from "../components/Navbar/Header";

const ListProduct = () => {
  const { solo, read } = useSoloContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    read();
  }, [read]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredProducts = solo
    ? solo.filter((el) => el.name.toLowerCase().includes(searchTerm))
    : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div id="list">
      <Header />
      <div className="in">
        <input
          type="search"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </div>

      <div className="container">
        <div className="list">
          {currentProducts.length > 0 ? (
            currentProducts.map((el, id) => <Characters el={el} key={id} />)
          ) : (
            <h1>No products found...</h1>
          )}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
