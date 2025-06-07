import { sectionTextColor } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";

const Images = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div ref={ref} id="images" className="py-[20px] ">
      <h2
        className={clsx(
          `font-[Imperial_Script] text-[55px] text-center`,
          sectionTextColor ? sectionTextColor : ""
        )}
      >
        Ảnh cưới
      </h2>

      <div className="flex justify-center">
        <hr
          className={clsx(
            `w-[200px]`,
            sectionTextColor ? sectionTextColor : ""
          )}
        />
      </div>

      <div className="grid grid-cols-5 max-sm:grid-cols-2 gap-2 px-[150px] max-sm:px-[5px] max-md:grid-cols-4 max-md:px-[50px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
            }}
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex items-center justify-center w-[100%] cursor-pointer"
          >
            <img
              src={`/gallery/image-${i}.jpg`}
              style={{
                boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              className="h-[300px] w-[180px] rounded-[15px] border-[8px] border-white object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Images;
