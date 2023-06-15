import React from 'react'
import {useGetCryptosQuery } from '../services/api'
import DashboardItems from '../components/DashboardItems'

const Dashboard = () => {
  const {data:dashboardData, error, isLoading} = useGetCryptosQuery()
  return (
    <div className="md:ml-64 p-4 mt-16  ml-0">
      <DashboardItems 
        data={dashboardData?.data?.coins}
        error={error}
        isLoading={isLoading}
      />
    </div>
  )
}

export default  Dashboard