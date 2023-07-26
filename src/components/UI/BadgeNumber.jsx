import React from "react";

const BadgeNumber = (props) => {
  return (
    <div
      className={`bg-zinc-200/50 inline-block w-6 text-center py-1 text-sm rounded-md text-zinc-500`}
    >
      {props.number > 0 ? props.number : 0}
    </div>
  );
};

export default BadgeNumber;
