import React from "react";

const arr = Array.from(Array(10).keys()).map((i) => {
  let randomSize = Math.round(Math.random() * 10);

  return {
    size: 12 + randomSize,
  };
});

const Snowfall = () => {
  return (
    <div className="snowflakes h-[0px]" aria-hidden="true">
      {arr.map((i, index) => (
        <div className="snowflake" key={index}>
          <img src={"/heart_ic.svg"} width={i.size} height={i.size} />
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
