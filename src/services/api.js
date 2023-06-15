import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const cryptoApiHeader = {
  'X-RapidAPI-Key': '154be63793msh30b576512b2edafp1fb5eejsn3495663f2da7',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'


const createReq = (url) =>({url, headers:cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: () => createReq('/coins'),
      }),
      getCryptosDetail: builder.query({
        query: (id) => createReq(`/coin/${id}`),
      }),
      getCryptosMarket: builder.query({
        query: () => createReq(`/markets`),
      }),
    }),
  })
  
 
  

  export const { 
    useGetCryptosQuery,
    useGetCryptosDetailQuery,
    useGetCryptosMarketQuery
   } = cryptoApi