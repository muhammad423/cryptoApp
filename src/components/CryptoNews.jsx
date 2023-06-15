import React from "react";
import { Select } from "antd";
import { ColorRing } from "react-loader-spinner";

const { Option } = Select;
const CryptoNews = ({
  newsData,
  isLoading,
  error,
  data,
  setCatagory,
}) => {
  function convertToRelativeTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const now = new Date();
    const diff = Math.abs(now - date) / 1000;

    const hours = Math.floor(diff / 3600);

    if (hours < 1) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}m ago`;
    } else {
      return `${hours}h ago`;
    }
  }

  return (
    <>
      <div className="my-10 -z-2 flex md:justify-between md:flex-row flex-col items-center">
        <p className="text-3xl font-bold text-center mb-3 md:mb-0">News About Cryptocurrency</p>
        <Select
          className="sel-styl"
          showSearch
          placeholder="search for crypto"
          optionFilterProp="children"
          onChange={(value) => setCatagory(value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
          }
        >
          <Option value="cryptocurrency">All coins</Option>
          {data?.data?.coins?.map((coin) => (
            <Option value={coin.name}>{coin.name}</Option>
          ))}
        </Select>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {newsData?.map((item) => (
          <a href={item?.url}>
          <div className="bg-slate-900 text-[#f9f9f9] px-3 py-3 flex flex-col gap-4 rounded-lg">
            <div className="flex justify-between items-center">
              <p>{item?.name}</p>
              <img src={item?.image?.thumbnail?.contentUrl} alt="" />
            </div>
            <p className="text-[14px] text-gray-400">
              {item?.description > 100
                ? `${item?.description.substring(0, 100)}...`
                : item?.description}
            </p>
            <div className="flex gap-5 items-center">
              <img
                src={item?.provider[0]?.image?.thumbnail?.contentUrl}
                alt=""
                className="w-[30px]"
              />
              <p className="text-sm font-bold">{item?.provider[0]?.name}</p>
            </div>
            <p className="text-sm font-semibold text-gray-400">
              {convertToRelativeTime(item?.datePublished)}
            </p>
          </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default CryptoNews;
