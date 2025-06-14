import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import { motion } from "motion/react";
import React from "react";

const Timer = () => {
  const dayRef = React.useRef(null);
  const hourRef = React.useRef(null);
  const minuteRef = React.useRef(null);
  const secondRef = React.useRef(null);

  const updateRemainTime = () => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/10/",
      birthday = "2025-07-10T02:00:00.000Z";

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        if (dayRef.current) {
          dayRef.current.innerText = Math.floor(distance / day);
        }

        if (hourRef.current) {
          hourRef.current.innerText = Math.floor((distance % day) / hour);
        }

        if (minuteRef.current) {
          minuteRef.current.innerText = Math.floor((distance % hour) / minute);
        }

        if (secondRef.current) {
          secondRef.current.innerText = Math.floor(
            (distance % minute) / second
          );
        }

        if (distance < 0) {
          clearInterval(x);
        }
      }, 0);
  };

  React.useEffect(() => {
    updateRemainTime();
  }, []);

  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  return (
    <div id="timer" ref={ref} className="relative">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 100,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        style={{
          objectPosition: "50% 29%",
        }}
        className="-z-10 absolute w-[100%] h-[100%] object-cover"
        src={"/gallery/31.jpg"}
      />
      <div className="-z-10 overlay"></div>

      <div className="z-[9999] py-10 max-sm:py-4 ">
        <motion.h2
          initial={{
            y: 20,
          }}
          whileInView={{
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className={clsx(
            `font-[Imperial_Script] text-[50px] text-center text-white`
          )}
        >
          We will become a family in
        </motion.h2>

        <div className="flex justify-center">
          <hr className={clsx(`w-[200px] text-white`)} />
        </div>
        <div className="max-sm:mt-5 mt-10">
          <motion.ul
            initial={{
              y: -20,
            }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center gap-x-24 max-sm:gap-x-4 max-md:gap-x-4"
          >
            {[
              {
                ref: dayRef,
                text: "Ngày",
              },
              {
                ref: hourRef,
                text: "Giờ",
              },
              {
                ref: minuteRef,
                text: "Phút",
              },
              {
                ref: secondRef,
                text: "Giây",
              },
            ].map((i) => (
              <li
                key={i.text}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div
                  className="text-[40px] max-sm:text-[20px] bg-red-500 text-white p-2 rounded-md w-[120px] max-sm:w-[80px] text-center"
                  ref={i.ref}
                ></div>
                <div className="italic text-[18px] text-white">{i.text}</div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Timer;
