import React from 'react'
import Header from '../components/dashboardcomponents/header'
import Dasboardsidebar from '../components/dashboardcomponents/dasboardsidebar'
import Buscontent from '../components/dashboardcomponents/buscontent'
import Addbtn from '../components/dashboardcomponents/addbtn'
function admindashboard() {
  return (
    <div className='bg-light-purple min-h-screen w-full flex flex-row'>
        <div className='w-1/5'>
              <Dasboardsidebar/>
        </div>
        <div className='w-4/5 overflow-y-auto h-screen'>
          <div className='flex flex-col'>
            <Header />
          </div>
          <div className='w-4/5 pl-10 h-[5rem] flex flex-row justify-between items-center'>
            <Addbtn name="ADD BUS" />
          </div> 
          <Buscontent/>
        </div>
    </div>
  )
}
export default admindashboard