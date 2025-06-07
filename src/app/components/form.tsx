"use client";
import { sectionTextColor, wedding_events } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "motion/react";
import Checkbox from "./checkbox";
import events from "events";
import { ToastContainer, toast } from "react-toastify";

type Inputs = {
  name: string;
  phone: string;
  isAttend: string;
  attendEvents?: any[];
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast("Cảm ơn anh/chị đã điền thông tin");
  };
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything

  return (
    <div ref={ref} id="form" className="py-[20px] ">
      <h2
        className={clsx(
          `font-[Imperial_Script] text-[55px] text-center`,
          sectionTextColor ? sectionTextColor : ""
        )}
      >
        Tham dự lễ cưới
      </h2>

      <div className="flex justify-center">
        <hr
          className={clsx(
            `w-[200px]`,
            sectionTextColor ? sectionTextColor : ""
          )}
        />
      </div>

      <p className="text-center italic text-[12px] my-4">
        Nếu có thể tham gia đám cưới, anh/chị vui lòng điền thông tin để gia
        đình sắp xếp và đón tiếp chu đáo ạ!{" "}
      </p>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[600px] max-sm:w-[85vw]"
        >
          <div>
            <label className="block font-[520]">
              Họ và tên
              <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              className="w-[100%] rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300"
              placeholder="Họ và tên"
              defaultValue=""
              {...register("name", { required: true })}
            />

            {errors.name && (
              <span className="text-red-400 text-[14px]">
                Vui lòng nhập họ và tên
              </span>
            )}
          </div>

          <div className="mt-2">
            <label className="block font-[520]">
              Số điện thoại<span className="text-red-400 ml-1">*</span>
            </label>
            <input
              className="w-[100%] rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300"
              placeholder="Số điện thoại"
              defaultValue=""
              {...register("phone", { required: true })}
            />
            {errors.name && (
              <span className="text-red-400 text-[14px]">
                Vui lòng nhập số điện thoại
              </span>
            )}
          </div>

          <label className="block font-[520]">
            Anh/chị có thể tham gia lễ cưới không?{" "}
            <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="">
            <div className="flex gap-10">
              <div className="inline-flex items-center">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="1"
                    {...register("isAttend", { required: true })}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                  />
                  <span className="absolute bg-red-400 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-2 text-slate-600 cursor-pointer text-sm"
                  htmlFor="html"
                >
                  Có
                </label>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="react"
                >
                  <input
                    value="0"
                    type="radio"
                    {...register("isAttend", { required: true })}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                    id="react"
                  />
                  <span className="absolute bg-red-400 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-2 text-slate-600 cursor-pointer text-sm"
                  htmlFor="react"
                >
                  Không
                </label>
              </div>
            </div>

            {errors.isAttend && (
              <span className="text-red-400 text-[14px]">
                Vui lòng chọn có hoặc không
              </span>
            )}
          </div>

          {watchAllFields.isAttend == "1" && (
            <>
              <div className="text-[12px] mt-2">Sự kiện sẽ tham dự</div>

              <div className="flex gap-2 flex-wrap">
                {wedding_events.map((i) => (
                  <div key={i.id} className="flex items-center gap-1">
                    <input
                      className="accent-pink-500 w-[15px] h-[15px]"
                      type="checkbox"
                      value={i.id}
                      {...register("attendEvents", { required: true })}
                    />

                    <span>{i.label}</span>
                  </div>
                ))}
              </div>

              {errors.attendEvents && (
                <span className="text-red-400 text-[14px]">
                  Vui lòng chọn sự kiện
                </span>
              )}
            </>
          )}

          <div className="flex justify-center mt-2">
            <motion.input
              whileTap={{
                scale: 0.8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="px-4 py-2 rounded-sm bg-[#fb2c36] cursor-pointer text-white"
              type="submit"
              value={"Gửi"}
            />
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Form;
