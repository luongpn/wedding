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
      <div className="relative w-[100%] h-[100%] ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          className="w-[100%] h-[100%]"
        >
          <img
            style={{
              objectPosition: "50% 30%",
            }}
            src={"/gallery/12.jpg"}
            className="w-[100%] h-[100%] object-cover"
          />
        </motion.div>

        <div className="overlay"></div>

        <div
          style={{
            transform: "translate(-50%, -50%)",
          }}
          className={clsx(
            `absolute top-[20%] left-[50%] text-white`,
            sectionTextColor ? sectionTextColor : ""
          )}
        >
          <motion.h2
            initial={{
              y: 40,
            }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="font-[Imperial_Script] text-[40px] text-center"
          >
            Thank you
          </motion.h2>
          <motion.p
            initial={{
              y: -40,
            }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="text-[13px] text-center w-[300px]"
          >
            Sự hiện diện của Quý vị là niềm vinh hạnh cho gia đình chúng tôi.
            Chân thành cảm ơn!
          </motion.p>
        </div>
      </div>

      <div className="py-1 text-center text-white bg-red-600 text-[13px]">
        Made by akira
      </div>
    </div>
  );
};

export default Thank;
