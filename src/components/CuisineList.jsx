import React, { useState, useLayoutEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const CuisineList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  // Scroll to top if path currentPage change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 mx-4 sm:mx-6 lg:mx-10 xl:mx-20 2xl:mx-56">
        {currentPosts.map((food) => (
          <Card
            key={food.id}
            id={food.id}
            type={food.type}
            title={food.title}
            description={food.description}
            difficulty={food.difficulty}
            prepTime={food.prepTime}
            img={food.imgURL}
          />
        ))}
      </ul>
      {data.length > 0 && (
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default CuisineList;
