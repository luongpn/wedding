"use client";
import React from "react";
import { motion } from "motion/react";
import { sectionTextColor } from "@/constants/constants";
import clsx from "clsx";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";

const BrideGroom = ({ isGroom, name }: { isGroom: any; name: any }) => {
  return (
    <div>
      <div>
        <p
          className={clsx(
            isGroom ? "text-right" : "text-left",
            "max-sm:text-center max-sm:text-[30px]"
          )}
        >
          {isGroom ? "Chú rể" : "Cô dâu"}
        </p>
        <p
          className={clsx(
            "font-[Imperial_Script] text-[30px] max-sm:text-[40px]",
            isGroom ? "text-right" : "text-left",
            "max-sm:text-center"
          )}
        >
          {name}
        </p>
      </div>
      <motion.div
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className={clsx(
          "shadow-md border-[5px] p-1 border-white w-fit rounded-full flex justify-end"
        )}
      >
        <img
          className="w-[200px] h-[200px] max-sm:h-[330px] max-sm:w-[330px] rounded-full"
          src={isGroom ? "/groom.webp" : "/bride.webp"}
        />
      </motion.div>
    </div>
  );
};

const BrideAndGroom = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div ref={ref} id="bride_and_groom" className="py-[20px] ">
      <h2
        className={clsx(
          `font-[Imperial_Script] text-[55px] text-center`,
          sectionTextColor ? sectionTextColor : ""
        )}
      >
        Cô dâu & chú rể
      </h2>

      <div className="flex justify-center">
        <hr
          className={clsx(
            `w-[200px]`,
            sectionTextColor ? sectionTextColor : ""
          )}
        />
      </div>

      <div className="flex justify-center flex-wrap gap-[100px] max-sm:gap-[10px] mt-20">
        <BrideGroom isGroom={false} name={"Ngô Huyền Trang"} />

        <svg
          className={clsx("mt-[150px] max-sm:mt-[40px]")}
          width="80px"
          height="80px"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fb2c36"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 0.6,
            }}
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></motion.path>
        </svg>
        <BrideGroom isGroom={true} name={"Huỳnh Đức"} />
      </div>
    </div>
  );
};

export default BrideAndGroom;
