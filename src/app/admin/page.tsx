"use client";
import AxiosClient from "@/apis/AxiosClient";
import { options, regardOptions, wedding_events } from "@/constants/constants";
import React from "react";
import dayjs from "dayjs";
import Pagination from "rc-pagination";
import clsx from "clsx";
import animationData from "@/assets/heart_anim.json";
import Lottie from "lottie-react";

const Item = ({ data }) => {
  console.log("🚀 ~ Item ~ data:", data);
  return (
    <div className="bg-white p-5 rounded-md shadow-md mb-2">
      <div className="grid grid-cols-4">
        <div>Tên: </div>
        <div className="font-bold col-span-3">{data?.name}</div>
      </div>

      <hr className="text-gray-300" />

      <div className="grid grid-cols-4">
        <div>Bạn sẽ đến chứ: </div>
        <div className="font-bold col-span-3">
          {options.find((x) => x.value == data?.attend)?.label}
        </div>
      </div>

      <hr className="text-gray-300" />

      <div className="grid grid-cols-4">
        <div>Bạn sẽ tham dự bữa tiệc nào: </div>
        <div className="font-bold col-span-3">
          {wedding_events
            .filter((x) => data?.events.includes(x.id.toString()))
            ?.map((x) => x.label)
            .join(", ")}
        </div>
      </div>

      <hr className="text-gray-300" />

      <div className="grid grid-cols-4">
        <div>Bạn là khách mời của ai:</div>
        <div className="font-bold col-span-3">
          {[
            data?.guest?.includes("bride") && "Cô dâu",
            data?.guest?.includes("groom") && "Chú rể",
          ]
            .filter((x) => x)
            .join(", ")}
        </div>
      </div>
      <hr className="text-gray-300" />

      <div className="grid grid-cols-4">
        <div>Ai sẽ nhìn thấy lời chúc của bạn:</div>
        <div className="font-bold col-span-3">
          {regardOptions?.find((x) => x.value == data?.see_regard)?.label}
        </div>
      </div>
      <hr className="text-gray-300" />

      <div className="grid grid-cols-4">
        <span>Lời chúc:</span>
        <span className="font-bold col-span-3">{data?.regard}</span>
      </div>
      <hr className="text-gray-300" />

      <div className="grid grid-cols-4">
        <span>Ngày tạo:</span>
        <span className="font-bold col-span-3">
          {data?.created_date &&
            dayjs(data?.created_date).format("HH:mm DD/MM/YYYY")}
        </span>
      </div>
    </div>
  );
};

export default function Admin() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = React.useState<any[]>([]);
  const [totalItemCount, setTotalItemCount] = React.useState(0);
  console.log("🚀 ~ Admin ~ totalItemCount:", totalItemCount);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    AxiosClient.get("/api/regard", {
      params: { page: page, limit: pageSize },
    })
      .then((res: any) => {
        console.log("🚀 ~ React.useEffect ~ res:", res);
        setData(res?.list);
        setTotalItemCount(res?.count);
      })
      .finally(() => setLoading(false));
  }, [page, pageSize]);

  const divItemRender = (current, type, element) => {
    console.log("🚀 ~ divItemRender ~ current:", current);
    console.log("🚀 ~ divItemRender ~ element:", element);
    if (type === "prev") {
      return (
        <div className="cursor-pointer px-2 py-1 border-[1px] border-solid border-gray-400">
          Prev
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className="cursor-pointer px-2 py-1 border-[1px] border-solid border-gray-400">
          Next
        </div>
      );
    }
    return (
      <div
        className={clsx(
          "cursor-pointer px-2 py-1 border-[1px] border-solid border-gray-400",
          page == current ? "bg-blue-400 text-white" : ""
        )}
      >
        {current}
      </div>
    );
  };

  return loading ? (
    <div className="h-screen w-screen fixed z-[100] bg-gray-400 flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  ) : (
    <div className="p-5">
      {data.map((i) => (
        <Item data={i} key={i._id} />
      ))}

      <div className="flex justify-center">
        <Pagination
          className="flex"
          total={totalItemCount}
          itemRender={divItemRender}
          pageSize={pageSize}
          onChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
}
