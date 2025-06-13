"use client";
import React from "react";
import { motion } from "motion/react";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import AxiosClient from "@/apis/AxiosClient";
import dayjs from "dayjs";

const Hero = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  const [data, setData] = React.useState<any>(null);
  console.log("🚀 ~ BrideAndGroom ~ data:", data);

  return (
    <div
      ref={ref}
      id="hero"
      className="relative h-screen flex flex-col justify-center "
    >
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        style={{
          objectPosition: "50% 30%",
        }}
        src={"/gallery/9.jpg"}
        className="w-[100%] h-[100%] object-cover absolute"
      />

      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          },
        }}
        style={{
          objectPosition: "50% 30%",
        }}
        src={"/gallery/17.jpg"}
        className="w-[100%] h-[100%] object-cover absolute"
      />

      <div className="overlay"></div>

      <div className="flex z-[99] flex-col text-[40px] items-center justify-center text-white font-[Imperial_Script]">
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

      <div className="flex justify-center">
        <div className="bg-red-500 rounded-md w-fit px-8 py-2 flex z-[99] flex-col text-[18px] items-center justify-center text-white uppercase">
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
            className="text-[20px]"
          >
            {data?.date?.text
              ? dayjs(data?.date?.text, "YYYY-MM-DD").format("DD.MM.YYYY")
              : "10.07.2025"}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
