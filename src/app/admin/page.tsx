"use client";
import AxiosClient from "@/apis/AxiosClient";
import { options, regardOptions, wedding_events } from "@/constants/constants";
import React, { useState } from "react";
import dayjs from "dayjs";
import Pagination from "rc-pagination";
import clsx from "clsx";
import animationData from "@/assets/heart_anim.json";
import dataLoading from "@/assets/data_loading.json";

import Lottie from "lottie-react";
import Input from "rc-input";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { vi } from "date-fns/locale/vi";
import useDebounce from "@/hooks/useDebounce";
registerLocale("vi", vi);
import Select from "react-select";

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

const Filter = ({ returnFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [attend, setAttend] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [guest, setGuest] = useState<any[]>([]);
  const [seeRegard, setSeeRegard] = useState<any>(null);

  const [search, setSearch] = React.useState("");
  const searchDebounce = useDebounce(search, 300);

  React.useEffect(() => {
    returnFilter({ search: searchDebounce });
  }, [searchDebounce]);

  React.useEffect(() => {
    returnFilter({
      from_date: startDate,
      to_date: endDate,
      attend: attend?.value,
      events:
        events && events?.length > 0
          ? events.map((i) => i.value).join(",")
          : "",
      guest:
        guest && guest?.length > 0 ? guest.map((i) => i.value).join(",") : "",
      see_regard: seeRegard?.value,
    });
  }, [startDate, endDate, attend, events, guest, seeRegard]);

  return (
    <div className="mb-2 flex flex-wrap gap-2 bg-white p-4 shadow-md rounded-md">
      <div>
        <label className="block mb-2.5 font-[550]">Tìm kiếm</label>
        <Input
          className="outline-none rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white"
          placeholder="Tìm kiếm"
          allowClear
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div>
        <label className="block font-[550]">Ngày bắt đầu</label>

        <DatePicker
          className="outline-none rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white"
          locale="vi"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div>
        <label className="block font-[550]">Ngày kết thúc</label>
        <DatePicker
          className="outline-none rounded-[5px] px-4 py-2 border-1 outline-0 border-gray-300 bg-white"
          locale="vi"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>

      <div>
        <label className="block font-[550]">Bạn sẽ đến chứ</label>

        <Select
          placeholder="Bạn sẽ đến chứ"
          value={attend}
          options={options}
          onChange={(value: any) => setAttend(value)}
        />
      </div>

      <div>
        <label className="block font-[550]">Bạn sẽ tham dự bữa tiệc nào?</label>

        <Select
          placeholder="Bạn sẽ tham dự bữa tiệc nào?"
          value={events}
          options={wedding_events.map((i) => ({
            value: i.id,
            label: i.label,
          }))}
          onChange={(value: any) => setEvents(value)}
          isMulti
        />
      </div>

      <div>
        <label className="block font-[550]">Bạn là khách mời của ai?</label>

        <Select
          placeholder="Bạn là khách mời của ai?"
          value={guest}
          options={[
            {
              value: "bride",
              label: "Cô dâu",
            },
            {
              value: "groom",
              label: "Chú rể",
            },
          ]}
          onChange={(value: any) => setGuest(value)}
          isMulti
        />
      </div>

      <div>
        <label className="block font-[550]">
          Ai sẽ nhìn thấy lời chúc của bạn
        </label>

        <Select
          placeholder="Ai sẽ nhìn thấy lời chúc của bạn"
          value={seeRegard}
          options={[
            {
              value: "all",
              label: "Tất cả",
            },
            {
              value: "bride_and_groom",
              label: "Chỉ cô dâu chú rể",
            },
          ]}
          onChange={(value: any) => setSeeRegard(value)}
        />
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
  const [isDataLoading, setIsDataLoading] = React.useState(true);

  const [filterQuery, setFilterQuery] = React.useState({});
  console.log("🚀 ~ Admin ~ filterQuery:", filterQuery);

  React.useEffect(() => {
    setIsDataLoading(true);
    console.log("🚀 ~ React.useEffect ~ filterQuery:", filterQuery);
    AxiosClient.get("/api/regard", {
      params: { page: page, limit: pageSize, ...filterQuery },
    })
      .then((res: any) => {
        setData(res?.list);
        setTotalItemCount(res?.count);
      })
      .finally(() => {
        setLoading(false);
        setIsDataLoading(false);
      });
  }, [page, pageSize, filterQuery]);

  const returnFilter = React.useCallback(
    (filter: any) => {
      setPage(1);
      setFilterQuery({ ...filterQuery, ...filter });
    },
    [filterQuery]
  );

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
      <Filter returnFilter={returnFilter} />
      <div className="mb-2">
        <span>Kết quả tìm kiếm: </span>
        <span className="text-white p-1 bg-green-400 rounded-sm">
          {totalItemCount}
        </span>
      </div>
      {isDataLoading ? (
        <Lottie animationData={dataLoading} loop={true} />
      ) : (
        data.map((i) => <Item data={i} key={i._id} />)
      )}

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
