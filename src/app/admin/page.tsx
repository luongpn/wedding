"use client";
import AxiosClient from "@/apis/AxiosClient";
import { options, regardOptions, wedding_events } from "@/constants/constants";
import React from "react";
import dayjs from "dayjs";
import Pagination from "rc-pagination";
import clsx from "clsx";

const Item = ({ data }) => {
  console.log("🚀 ~ Item ~ data:", data);
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-2">
      <div>
        <span>Tên: </span>
        <span className="font-bold">{data?.name}</span>
      </div>
      <div>
        <span>Bạn sẽ đến chứ: </span>
        <span className="font-bold">
          {options.find((x) => x.value == data?.attend)?.label}
        </span>
      </div>
      <div>
        <span>Bạn sẽ tham dự bữa tiệc nào: </span>
        <span className="font-bold">
          {wedding_events
            .filter((x) => data?.events.includes(x.id.toString()))
            ?.map((x) => x.label)
            .join(", ")}
        </span>
      </div>

      <div>
        <span>Bạn là khách mời của ai:</span>
        <span className="font-bold">
          {[
            data?.guest?.includes("bride") && "Cô dâu",
            data?.guest?.includes("groom") && "Chú rể",
          ]
            .filter((x) => x)
            .join(", ")}
        </span>
      </div>

      <div>
        <span>Ai sẽ nhìn thấy lời chúc của bạn:</span>
        <span className="font-bold">
          {regardOptions?.find((x) => x.value == data?.see_regard)?.label}
        </span>
      </div>

      <div>
        <span>Lời chúc:</span>
        <span className="font-bold">{data?.regard}</span>
      </div>

      <div>
        <span>Ngày tạo:</span>
        <span className="font-bold">
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

  React.useEffect(() => {
    AxiosClient.get("/api/regard", {
      params: { page: page, limit: pageSize },
    }).then((res: any) => {
      console.log("🚀 ~ React.useEffect ~ res:", res);
      setData(res?.list);
      setTotalItemCount(res?.count);
    });
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

  return (
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
