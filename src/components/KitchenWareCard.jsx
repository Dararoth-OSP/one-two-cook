import React, { Fragment } from "react";
import PotIMG from '../assets/nonstick-pot.jpg'

const KitchenWareCard = () => {
  return (
    <Fragment>
      <div className="w-[310px] inline-block mb-5 rounded-xl border border-zinc-400">
        <div
          className="w-full h-80 rounded-t-xl"
          style={{
            backgroundImage: `url(${PotIMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="py-4 text-center space-y-1 font-semibold border-t border-zinc-400">
          <h1 className="text-2xl font-bold">Non Stick Pot</h1>
          <p className="text-sm font-light">Shop Online</p>
        </div>
      </div>
    </Fragment>
  );
};

export default KitchenWareCard;
