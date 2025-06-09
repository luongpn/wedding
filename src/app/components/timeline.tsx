import { sectionTextColor } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { motion, useAnimate } from "motion/react";

const Image = ({
  scope,
  initial,
  url,
}: {
  scope: any;
  initial: any;
  url: string;
}) => {
  return (
    <motion.div initial={initial} ref={scope} className="h-[130px]">
      <div className="w-fit border-x-6 border-t-6 border-b-12 border-white">
        <img
          className="w-[180px] h-[100px] max-sm:w-[170px] max-sm:h-[90px]"
          src={url}
        />
      </div>
    </motion.div>
  );
};

const Text = ({
  scope,
  initial,
  year,
  text,
}: {
  scope: any;
  initial: any;
  year: any;
  text: string;
}) => {
  return (
    <motion.div initial={initial} ref={scope} className="h-[130px]">
      <p className="text-[16px] text-white tracking-widest font-[550]">
        {year}
      </p>
      <p className="text-white">{text}</p>
    </motion.div>
  );
};

const Timeline = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();
  const [scope5, animate5] = useAnimate();
  const [scope6, animate6] = useAnimate();
  const [scope7, animate7] = useAnimate();
  const [scope8, animate8] = useAnimate();

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

      <div className="flex justify-center gap-10  max-sm:gap-3 max-sm:px-5 mt-2">
        <motion.div
          onViewportEnter={(e) => {
            animate1(
              scope1.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
            animate3(
              scope3.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                delay: 0.5,
                ease: "easeInOut",
              }
            );
            animate5(
              scope5.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                delay: 1,
                ease: "easeInOut",
              }
            );
            animate7(
              scope7.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                delay: 1.5,
                ease: "easeInOut",
              }
            );
          }}
          onViewportLeave={(e) => {
            animate1(
              scope1.current,
              {
                x: -10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
            animate3(
              scope3.current,
              {
                x: -10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
            animate5(
              scope5.current,
              {
                x: -10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
            animate7(
              scope7.current,
              {
                x: -10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
          }}
          className="flex-1 flex justify-end flex-col items-end"
        >
          <Image
            initial={{
              x: -10,
              opacity: 0.2,
            }}
            scope={scope1}
            url={"/background.jpg"}
          />
          <Text
            initial={{
              x: -10,
              opacity: 0.2,
            }}
            scope={scope3}
            year={2019}
            text="Hẹn hò"
          />
          <Image
            initial={{
              x: -10,
              opacity: 0.2,
            }}
            scope={scope5}
            url={"/background.jpg"}
          />
          <Text
            initial={{
              x: -10,
              opacity: 0.2,
            }}
            scope={scope7}
            year={2024}
            text="Ngày chung đôi"
          />
        </motion.div>

        <motion.div
          initial={{
            height: 0,
          }}
          whileInView={{
            height: 520,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-[1px] bg-white"
        ></motion.div>

        <motion.div
          onViewportEnter={(e) => {
            animate2(
              scope2.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );

            animate4(
              scope4.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                delay: 0.5,
                ease: "easeInOut",
              }
            );
            animate6(
              scope6.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                delay: 1,
                ease: "easeInOut",
              }
            );
            animate8(
              scope8.current,
              {
                x: 0,
                opacity: 100,
              },
              {
                duration: 0.5,
                delay: 1.5,
                ease: "easeInOut",
              }
            );
          }}
          onViewportLeave={(e) => {
            animate2(
              scope2.current,
              {
                x: 10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );

            animate4(
              scope4.current,
              {
                x: 10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
            animate6(
              scope6.current,
              {
                x: 10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
            animate8(
              scope8.current,
              {
                x: 10,
                opacity: 0.2,
              },
              {
                duration: 0.5,
                ease: "easeInOut",
              }
            );
          }}
          className="flex-1 flex justify-end flex-col items-start"
        >
          <Text
            initial={{
              x: 10,
              opacity: 0.2,
            }}
            scope={scope2}
            year={2018}
            text="Lần đầu gặp gỡ"
          />
          <Image
            initial={{
              x: 10,
              opacity: 0.2,
            }}
            scope={scope4}
            url={"/background.jpg"}
          />
          <Text
            initial={{
              x: 10,
              opacity: 0.2,
            }}
            scope={scope6}
            year={2023}
            text="Cầu hôn"
          />
          <Image
            initial={{
              x: 10,
              opacity: 0.2,
            }}
            scope={scope8}
            url={"/background.jpg"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
