import React, { useState} from 'react'

import { useGetCryptosNewsQuery } from '../services/NewsApi'
import { useGetCryptosQuery } from '../services/api'
import { CryptoNews } from '../components'


const Market = () => {
  const [catagory, setCatagory] = useState('Cryptocurrency')
  const { data } = useGetCryptosQuery()
  const { data: newsData, error, isLoading } = useGetCryptosNewsQuery(catagory)

  console.log(catagory, "catagory")

  return (
    <div className='text-black md:ml-64 p-4 mt-16 ml-0 '>
      <CryptoNews
        newsData={newsData?.value}
        error={error}
        isLoading={isLoading}
        data={data}
        catagory={catagory}
        setCatagory={setCatagory}
      />
    </div>
  )
}

export default Market