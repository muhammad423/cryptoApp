import React from "react";
import { useParams } from "react-router-dom";
import { useGetCryptosDetailQuery } from "../services/api";
import { DetailBanner } from "../components";

const Detail = () => {
  const { coinId } = useParams();
  const { data: coinData, isLoading, error } = useGetCryptosDetailQuery(coinId);

  return (
    <div className="md:ml-64 p-4 mt-16  mb-2 ml-0">
      <h1 className="mb-6 text-5xl font-bold text-center">
        Crypto Currency Detail
      </h1>
      <DetailBanner
        data={coinData?.data?.coin}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Detail;
