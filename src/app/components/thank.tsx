import { sectionTextColor } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";

const Thank = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div ref={ref} id="thank" className="h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="w-[300px] h-[276px] relative flex items-center justify-center">
          <img
            style={{
              position: "absolute",
              left: "52%",
              top: "56%",
              transform: "translate(-50%,-50%)",
            }}
            src={"/footer-couple-pic-frame.png"}
          />
          <img
            src={"/anhcuoi.webp"}
            className="w-[225px] h-[225px] rounded-full"
          />
        </div>

        <h2
          className={clsx(
            `font-[Imperial_Script] text-[55px] text-center`,
            sectionTextColor ? sectionTextColor : ""
          )}
        >
          Thank you
        </h2>
      </div>
      <div className="h-[20px] text-center text-white bg-red-600">
        Made by akira
      </div>
    </div>
  );
};

export default Thank;
