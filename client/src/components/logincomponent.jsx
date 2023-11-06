import React from 'react'
import Logo from '../assets/logo.svg'
import Cancel from '../assets/cancel.svg'
import { Link } from 'react-router-dom';


function logincomponent(props) {


  return (
    <div className=' flex flex-row w-full h-screen justify-center items-center align-middle bg-semitrans'>
      <div className='w-full flex flex-row justify-center fixed gap-1'>
      <div className="rounded-[2rem] w-1/4 h-[20rem] shadow-2xl bg-white flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className=" flex justify-center">
               <img src={Logo} alt="" />
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Log in to your account
              </h2>             
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Username{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-lg border border-gray border-solid bg-transparent  text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="username"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Password{' '}
                      </label>
                     
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-lg border border-gray bg-transparent  text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                      ></input>
                    </div>
                  </div>
                  <div className='flex justify-center items-center w-full'>
                 <Link className='w-full' to="/mainpage"> 
                     <button
                       type="button"
                         className="cursor-pointer flex w-full items-center align-middle text-center justify-center rounded-lg bg-black py-1 px-2 font-semibold leading-7 text-white hover:bg-black/80"
                              >
                            Login
                          </button>
                          </Link>     

                  </div>
                </div>
              </form>
              <p className="mt-2 text-center text-sm text-gray-600 ">
                Don&apos;t have an account?{' '}
                <a
                  href="/"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Sign Up
                </a>
              </p>
              <div className='flex flex-row align-middle items-center justify-evenly w-full'>
              <button
                type="button"
                className="flex w-2/5 cursor-pointer items-center align-middle text-center justify-center rounded-lg bg-black py-1 px-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                Admin Login
              </button>
              <button
                type="button"
                className="flex cursor-pointer w-2/5 items-center align-middle text-center justify-center rounded-lg bg-black py-1 px-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                BTO Login
              </button>                        
              </div>
            </div>
          </div>   
          <div className='cursor-pointer'>
            <img onClick={props.onClick} src={Cancel} alt="" />
          </div>
        
          </div>
    </div>
  )
}
export default logincomponent