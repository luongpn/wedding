"use client";
import { navIds } from "@/constants/constants";
import clsx from "clsx";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const { activeNav, prevNav } = useSelector((state: any) => state.root);
  console.log("🚀 ~ Nav ~ activeNav:", activeNav);

  return (
    <nav className="fixed right-2 top-[50%]">
      <ul className="flex flex-col gap-2 rounded-full p-2 h-fit relative">
        <motion.div
          className={clsx(
            "w-[10px] h-[10px] rounded-full bg-black right-[10px] absolute top-[10px] z-10"
          )}
          animate={{
            transform: `translateY(${
              navIds.map((i) => i.id).findIndex((x) => x == activeNav) * 21
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
            className="flex justify-end flex-row-reverse items-center gap-1 relative group"
          >
            <motion.div
              onClick={() => {
                document!.getElementById(`${i.id}`)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              whileHover={{
                scale: 1.3,
              }}
              className={clsx(
                "rounded-full bg-white cursor-pointer border-[2px] border-solid border-gray-300 h-fit ",
                activeNav == i ? "" : ""
              )}
            >
              <motion.div
                className={clsx(
                  "w-[10px] h-[10px] rounded-full group-hover:bg-black",
                  activeNav == i.id ? "bg-bg-black" : ""
                )}
              ></motion.div>
            </motion.div>

            <div className="rounded-[3px] p-1 text-[12px] bg-gray-700 text-white hidden group-hover:inline absolute right-[30px] text-right w-fit text-nowrap">
              {i.label}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
