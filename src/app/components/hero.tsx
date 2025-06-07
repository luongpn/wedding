"use client";
import React from "react";
import { motion } from "motion/react";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";

const Hero = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div
      ref={ref}
      id="hero"
      className="h-screen flex flex-col justify-center bg-red-500"
    >
      <div className="flex flex-col text-[18px] items-center justify-center text-white uppercase">
        <motion.p
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="font-[200] tracking-widest"
        >
          Save the date
        </motion.p>
        <motion.span
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-[18px]"
        >
          04.04.2024
        </motion.span>
      </div>

      <div className="flex flex-col text-[60px] items-center justify-center text-white font-[Imperial_Script]">
        <motion.p
          initial={{
            y: "-100%",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className=""
        >
          Huyền Trang
        </motion.p>
        <p>&</p>
        <motion.p
          initial={{
            y: "100%",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Huỳnh Đức
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
