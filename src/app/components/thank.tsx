import { sectionTextColor } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";

const Thank = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div ref={ref} id="thank" className="h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center flex-col">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 100,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="w-[300px] h-[276px] relative flex items-center justify-center"
        >
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
        </motion.div>

        <motion.div
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className={clsx(``, sectionTextColor ? sectionTextColor : "")}
        >
          <h2 className="font-[Imperial_Script] text-[55px] text-center">
            Thank you
          </h2>
          <p className="text-[14px] text-center w-[300px]">
            Sự hiện diện của Quý vị là niềm vinh hạnh cho gia đình chúng tôi.
            Chân thành cảm ơn!
          </p>
        </motion.div>
      </div>
      <div className="py-1 text-center text-white bg-red-600 text-[13px]">
        Made by akira
      </div>
    </div>
  );
};

export default Thank;
