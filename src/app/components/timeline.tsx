import { sectionTextColor } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { motion } from "motion/react";

const Image = ({ url }: { url: string }) => {
  return (
    <div className="h-[130px]">
      <div className="w-fit border-x-6 border-t-6 border-b-12 border-white">
        <img className="w-[180px] h-[100px]" src={url} />
      </div>
    </div>
  );
};

const Text = ({ year, text }: { year: any; text: string }) => {
  return (
    <div className="h-[130px]">
      <p className="text-[16px] text-white tracking-widest font-[550]">
        {year}
      </p>
      <p className="text-white">{text}</p>
    </div>
  );
};

const Timeline = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: "url('/light_bulb_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="story"
      className="py-[20px] "
    >
      <h2
        className={clsx(
          `font-[Imperial_Script] text-[55px] text-center text-white`
        )}
      >
        Câu chuyện
      </h2>

      <div className="flex justify-center">
        <hr className={clsx(`w-[200px] text-white`)} />
      </div>

      <div className="flex justify-center gap-10 max-sm:gap-5 max-sm:px-5 mt-2">
        <div className="flex-1 flex justify-end flex-col items-end">
          <Image url={"/background.jpg"} />
          <Text year={2019} text="Hẹn hò" />
          <Image url={"/background.jpg"} />
          <Text year={2024} text="Ngày chung đôi" />
        </div>

        <motion.div
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-[1px] bg-white"
        ></motion.div>

        <div className="flex-1 flex justify-end flex-col items-start">
          <Text year={2018} text="Lần đầu gặp gỡ" />
          <Image url={"/background.jpg"} />
          <Text year={2023} text="Cầu hôn" />
          <Image url={"/background.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
