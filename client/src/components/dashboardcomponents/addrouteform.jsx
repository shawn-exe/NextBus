import React from 'react'

function Addrouteform() {
  return (
    <div className=" w-full h-[28rem] flex justify-center items-center ">   
        <div className="w-4/5 rounded-xl bg-white p-4 shadow">
          <p className="text-md font-bold text-center text-gray-900">Enter the Route Info</p>
          <div className="flex flex-row flex-wrap w-full gap-24 justify-center mb-5">
            <div className="w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Route Number
              </label>
              <input
                className="flex h-7  w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter the Route Number"
                id="firstName"
              ></input>
            </div>

            <div className=" w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Source
              </label>
              <input
                className="flex h-7 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter the Source"
                id="lastName"
              ></input>
            </div> 
          </div>

          <div className="flex flex-row flex-wrap w-full gap-24 justify-center mb-5 ">
            <div className="w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
               Destination
              </label>
              <input
                className="flex h-7  w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter the Destination"
                id="firstName"
              ></input>
            </div>

            <div className=" w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Duration
              </label>
              <input
                className="flex h-7 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter the Duration"
                id="lastName"
              ></input>
            </div> 
          </div>

          <div className="flex flex-row flex-wrap w-full gap-24 justify-center mb-5">
            <div className=" w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
               Stops
              </label>
              <input
                className="flex h-7 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter the Number of stops"
                id="lastName"
              ></input>
            </div> 
          </div>

          <div className="flex flex-row items-center justify-center">
              <button
                type="button"
                className=" rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Submit
              </button>
            </div>
        </div>
      </div>

  );
}
export default Addrouteform


