"use client";
import { navIds } from "@/constants/constants";
import { cn } from "@/utils";
import clsx from "clsx";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const { activeNav, prevNav } = useSelector((state: any) => state.root);
  console.log("🚀 ~ Nav ~ activeNav:", activeNav);

  return (
    <nav className="fixed right-4 max-sm:right-0 top-[50%] z-[100]">
      <ul className="flex flex-col gap-2 rounded-full p-2 h-fit relative">
        <motion.div
          className={clsx(
            "w-[20px] h-[20px] rounded-full bg-white right-[3px] absolute top-[3px] z-10"
          )}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          animate={{
            transform: `translateY(${
              navIds.map((i) => i.id).findIndex((x) => x == activeNav) * 28
            }px)`,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
        ></motion.div>
        {navIds.map((i) => (
          <li
            key={i.id}
            className="flex justify-end flex-row-reverse items-center mb-3 relative group"
          >
            <motion.div
              onClick={() => {
                document!.getElementById(`${i.id}`)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className={clsx(
                "z-10",
                activeNav == i.id
                  ? "rounded-full bg-black cursor-pointer"
                  : "rounded-full cursor-pointer border-gray-600 border-[1px] w-[8px] h-[8px]"
              )}
            >
              <motion.div
                className={clsx("w-[10px] h-[10px] rounded-full ")}
              ></motion.div>
            </motion.div>

            <div className="hidden group-hover:flex group-hover:items-center absolute right-[18px] text-right ">
              <div className="rounded-[3px] px-1.5 py-1.5 text-[12px] bg-black text-white w-fit text-nowrap">
                {i.label}
              </div>
              <div className="arrow-right"></div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
