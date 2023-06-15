import React from "react";
import { ColorRing } from "react-loader-spinner";

const DetailBanner = ({ data, isLoading, error }) => {
  
  return (
    <>
      {!isLoading ? (
        <div className="flex items-center md:flex-row flex-col bg-slate-900  px-10 py-5 gap-5 text-[#f9f9f9] rounded-lg">
          <div className=" object-cover w-[100%]">
            <img src={data?.iconUrl} alt="" className="w-[100%]" />
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-4xl font-bold text-[#F7931A]">{data?.name}</h3>
            <h4 className="text-lg font-semibold">{data?.symbol}</h4>
            <div className="flex flex-col gap-3">
              <p className="text-[16px] text-gray-400">{data?.description}</p>
              <p className="text-[18px] font-semibold text-gray-300">{`Number oF Exchange = ${data?.numberOfExchanges}`}</p>
              <p className="text-[18px] font-semibold text-gray-300">{`Number oF Market = ${data?.numberOfMarkets}`}</p>
              <p className="text-[18px] font-semibold text-gray-300">{`Rank = ${data?.rank}`}</p>
              <a href={data?.websiteUrl}>
                <button className="bg-[#F7931A] px-4 py-3 rounded-lg font-semibold hover:bg-[#cf8223] duration-300">
                  GO TO MORE DETAILS
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh]">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        </div>
      )}
    </>
  );
};

export default DetailBanner;
