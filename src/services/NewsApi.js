import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const newsApiHeader =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '154be63793msh30b576512b2edafp1fb5eejsn3495663f2da7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }


const baseUrl = 'https://bing-news-search1.p.rapidapi.com'




const createReq = (url) =>({url, headers:newsApiHeader})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptosNews: builder.query({
        query: (catagory) => createReq(`/news/search?q=${catagory}`),
      }),
    }),
  })
  
 

  export const { 
    useGetCryptosNewsQuery,
   } = cryptoNewsApi