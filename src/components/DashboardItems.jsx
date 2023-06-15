import React from "react";
import { Link } from "react-router-dom";

const DashboardItems = ({ data, error, isLoading }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 w-full text-[#f9f9f9] overflow-hidden">
      {data?.map((item) => (
        <div
          className="flex flex-col items-center rounded-lg  gap-3 bg-slate-900 hover:bg-[#120b20] duration-300  px-5 py-3 hover:shadow-sm"
          key={item?.uuid}
        >
          <img
            src={item?.iconUrl}
            alt="img"
            className="w-[100px] h-[100px] transition-transform duration-300 hover:scale-110 "
          />
          <div>
            <Link to={`detail/${item?.uuid}`}>
              <p className="text-[18px] font-semibold truncate hover:text-gray-300 duration-300">{item?.name}</p>
            </Link>
          </div>
          <div className="flex justify-between items-center gap-10">
            <p className="text-gray-500 font-medium text-sm">
              {item?.symbol} Rate :
            </p>
            <p className="text-[#000000] font-bold text-sm">
              {typeof item?.price !== "number"
                ? `${Math.round(item?.price * 10000) / 10000}$`
                : "N/A"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardItems;
