import React from "react";

const PageBanner = (props) => {
  return (
    <div
      className="h-[150px] relative text-white bg-no-repeat"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-4 space-y-4 h-full bg-gradient-to-r from-black from-0% to-transparent to-70% px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-56">
        <h1 className="text-4xl font-bold line-clamp-1">{props.title}</h1>
        <p className="text-base md:text-xl line-clamp-2 md:w-2/3">{props.text}</p>
      </div>
    </div>
  );
};

export default PageBanner;
