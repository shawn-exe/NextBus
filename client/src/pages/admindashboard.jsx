import React from 'react'
import Header from '../components/dashboardcomponents/header'
import Dasboardsidebar from '../components/dashboardcomponents/dasboardsidebar'
function admindashboard() {
  return (
    <div className='bg-light-purple min-h-screen w-full flex flex-row'>
        <div className='w-1/5'>
              <Dasboardsidebar/>
        </div>
        <div className='w-4/5'>
        <div className='flex flex-col '>
          <Header />
        </div>
        </div>
    </div>
  )
}
export default admindashboard