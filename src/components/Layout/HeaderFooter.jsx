import React from "react";
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";


const HeaderFooter = (props) => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div className="w-full fixed h-1 z-30 bg-[#f56040] "></div>
      <Headroom>
        <Navbar />
        {/* {status === "completed" && (
          <div className="w-auto px-12 h-16 fixed top-24 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-3 flex justify-center items-center gap-2 bg-white rounded-2xl border-4 border-[#f56040]">
            <BsFillCheckCircleFill className="text-blue-600 w-6 h-6" />
            <h1 className="text-center font-bold">
              Add you recipe sucessfully !
            </h1>
          </div>
        )} */}
      </Headroom>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HeaderFooter;
