"use client";
import React from "react";
import { motion } from "motion/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";
import { sectionTextColor, wedding_events } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";

const Event = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div id="event" ref={ref} className="pb-10">
      <h2
        className={clsx(
          `font-[Imperial_Script] text-[55px] text-center`,
          sectionTextColor ? sectionTextColor : ""
        )}
      >
        Sự kiện cưới
      </h2>

      <div className="flex justify-center">
        <hr
          className={clsx(
            `w-[200px]`,
            sectionTextColor ? sectionTextColor : ""
          )}
        />{" "}
      </div>

      <div className="px-[100px] max-sm:px-[10px] flex justify-center flex-wrap gap-[20px] mt-5">
        {wedding_events.map((i) => (
          <motion.div
            key={i.id}
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white p-3 h-[400px] w-[230px] shadow-md flex flex-col rounded-md"
          >
            <div className="text-[16px] text-center font-[550] tracking-wider uppercase mb-2">
              <span>{i.label}</span>
              <div></div>
            </div>

            <div className="h-[200px]">
              <img src={i.image} className="w-[100%] h-[100%]" />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="mt-2">
                <div className="text-[14px] font-[500] flex gap-1 items-center">
                  <FaClock />
                  <span>{i.time}</span>
                </div>
                <div className="text-[14px] font-[500] flex gap-1 items-start">
                  <FaMapMarkerAlt />
                  <span>{i.address}</span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    let url = i.map;
                    window.open(url, "_blank");
                  }}
                  className="bg-yellow-500 mt-2 py-1 cursor-pointer text-white w-[100%] rounded-md flex justify-center items-center gap-1 "
                >
                  <FaMapMarkedAlt />
                  <span className="text-[15px]">Xem bản đồ</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Event;
