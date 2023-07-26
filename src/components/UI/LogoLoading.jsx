import React from "react";
import logoLoading from "../../assets/logo-loading.gif";

const LogoLoading = () => {
  return (
    <div
      className="w-full h-[190px] lg:w-[1250px] lg:h-[400px] "
      style={{
        backgroundImage: `url(${logoLoading})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
};

export default LogoLoading;
