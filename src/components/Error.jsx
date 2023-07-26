import React from "react";
import Headroom from "react-headroom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div className="w-full fixed  h-1 z-30 bg-[#f56040] "></div>
      <Headroom>
        <Navbar />
      </Headroom>
      <main className=" text-center my-52">
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </main>
      <Footer />
    </>
  );
};

export default Error;
