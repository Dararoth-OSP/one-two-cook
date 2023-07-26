import { current } from "@reduxjs/toolkit";
import React from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length));
  };

  return (
    <div className="flex items-center justify-center my-8 gap-2 text-2xl font-medium">
      <button onClick={handlePreviousPage}>
        <BsFillCaretLeftFill className="hover:text-orange-600" />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${
              page == currentPage && "text-orange-600 border border-orange-600"
            } w-11 h-11 rounded-full`}
          >
            {page}
          </button>
        );
      })}
      <button onClick={handleNextPage}>
        <BsFillCaretRightFill className="hover:text-orange-600" />
      </button>
    </div>
  );
};

export default Pagination;
