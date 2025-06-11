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

  React.useEffect(() => {
    AxiosClient.get("/api/config").then((res) => {
      setData(res);
    });
  }, []);

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
          {data?.date?.text
            ? dayjs(data?.date?.text, "YYYY-MM-DD").format("DD.MM.YYYY")
            : "04.04.2024"}
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
          {data?.bride?.name || "Huyền Trang"}
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
          {data?.groom?.name || "Huỳnh Đức"}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
