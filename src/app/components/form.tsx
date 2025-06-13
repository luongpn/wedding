"use client";
import {
  options,
  regardOptions,
  sectionTextColor,
  wedding_events,
} from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { motion } from "motion/react";
import Checkbox from "./checkbox";
import events from "events";
import { ToastContainer, toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
type Inputs = {
  name: string;
  attend: any;
  events?: any[];
  guest?: any[];
  see_regard: any;
  regard: string;
};

import Select from "react-select";
import AxiosClient from "@/apis/AxiosClient";

const Regards = () => {
  const [data, setData] = React.useState<any[]>([]);
  console.log("🚀 ~ Regards ~ data:", data);
  const [totalItemCount, setTotalItemCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    AxiosClient.get("/api/regard-client", { params: { page, limit: 20 } }).then(
      (res: any) => {
        console.log("🚀 ~ AxiosClient.get ~ res:", res);
        setData((prev) => [
          ...prev,
          ...(res?.list
            ? res?.list?.filter(
                (x) => !prev?.map((i) => i._id)?.includes(x._id)
              )
            : []),
        ]);
        setTotalItemCount(res?.count || 0);
      }
    );
  }, [page]);

  return (
    <motion.div
      id="scrollableRegardDiv"
      className="p-2 bg-white max-sm:w-[90vw] w-[600px] border-t-10 border-5 border-[#fb2c36]"
      style={{
        height: 300,
        overflow: "auto",
        display: "flex",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={() => {
          console.log("next");
          setPage(page + 1);
        }}
        hasMore={data.length < totalItemCount}
        loader={<h4></h4>}
        scrollableTarget="scrollableRegardDiv"
      >
        {data.map((i) => (
          <div
            key={i._id}
            style={{
              strokeDasharray: 10,
            }}
            className="border-b-[1px] w-[100%] border-dashed pb-2"
          >
            <div>
              <p className="font-bold text-[16px]">{i.name}</p>
              <span>{i.regard}</span>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </motion.div>
  );
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.attend = data.attend.value;
    data.see_regard = data.see_regard.value;

    console.log("🚀 ~ Form ~ data:", data);

    toast("Cảm ơn anh/chị đã điền thông tin");

    AxiosClient.post("/api/regard", data).then((res) => {
      reset();
    });
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
            <label className="block font-[520] text-[14px]">
              Tên của bạn là gì
              <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              className="w-[100%] rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white"
              placeholder="Nhập tên của bạn"
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
            <label className="block font-[520] text-[14px]">
              Bạn sẽ đến chứ <span className="text-red-400 ml-1">*</span>
            </label>

            <Controller
              control={control}
              name="attend"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  placeholder="Bạn sẽ đến chứ"
                  value={value}
                  options={options}
                  onChange={(value: any) => {
                    onChange(value);
                  }}
                />
              )}
            />

            {errors.attend && (
              <span className="text-red-400 text-[14px]">
                Vui lòng chọn bạn sẽ đến chứ{" "}
              </span>
            )}
          </div>

          <label className="block font-[520] text-[14px]">
            Bạn sẽ tham dự bữa tiệc nào?{" "}
            <span className="text-red-400 ml-1">*</span>
          </label>

          <div className="flex gap-2 flex-wrap  w-[100%] rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white">
            {wedding_events.map((i) => (
              <div key={i.id} className="flex items-center gap-1">
                <input
                  className="accent-pink-500 w-[15px] h-[15px]"
                  type="checkbox"
                  value={i.id}
                  {...register("events", { required: true })}
                />

                <span>{i.label}</span>
              </div>
            ))}
          </div>

          {errors.events && (
            <div className="text-red-400 text-[14px]">
              Vui lòng chọn bạn sẽ tham gia bữa tiệc nào
            </div>
          )}

          <label className="block font-[520] text-[14px]">
            Bạn là khách mời của ai?
          </label>

          <div className="flex gap-2 flex-wrap max-sm:block">
            <div className="flex gap-2 flex-wrap rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white">
              <div className="flex items-center gap-1">
                <input
                  className="accent-pink-500 w-[15px] h-[15px]"
                  type="checkbox"
                  value={"bride"}
                  {...register("guest", { required: true })}
                />

                <span>Cô dâu</span>
              </div>
              <div className="flex items-center gap-1">
                <input
                  className="accent-pink-500 w-[15px] h-[15px]"
                  type="checkbox"
                  value={"groom"}
                  {...register("guest", { required: true })}
                />

                <span>Chú rể</span>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap flex-1 rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white">
              <Controller
                control={control}
                name="see_regard"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Select
                    className="!w-[100%]"
                    placeholder="Ai sẽ nhìn thấy lời chúc của bạn"
                    value={value}
                    options={regardOptions}
                    onChange={(value: any) => {
                      onChange(value);
                    }}
                  />
                )}
              />
            </div>
          </div>

          {errors.guest && (
            <div className="text-red-400 text-[14px]">
              Vui lòng chọn bạn là khách mời của ai
            </div>
          )}

          {errors.see_regard && (
            <div className="text-red-400 text-[14px]">
              Vui lòng chọn ai sẽ nhìn thấy lời chúc của bạn
            </div>
          )}

          <label className="block font-[520] text-[14px]">
            Gửi lời chúc
            <span className="text-red-400 ml-1">*</span>
          </label>
          <textarea
            className="w-[100%] rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white"
            placeholder="Gửi lời chúc của bạn đến cô dâu chú rể"
            defaultValue=""
            {...register("regard", { required: true })}
          />

          {errors.regard && (
            <div className="text-red-400 text-[14px]">
              Vui lòng nhập lời chúc
            </div>
          )}

          <div className="flex justify-center mt-2">
            <motion.input
              whileTap={{
                scale: 0.8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="px-4 py-2 uppercase rounded-sm bg-[#fb2c36] cursor-pointer text-white"
              type="submit"
              value={"Xác nhận tham dự"}
            />
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-4">
        <Regards />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
