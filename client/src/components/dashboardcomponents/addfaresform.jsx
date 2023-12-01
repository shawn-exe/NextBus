import React,{useState} from 'react'
import axios from 'axios'
function AddFaresform() {
  const [values,setValues]=useState({
    fareid: '',
    routid: '',
    cfare: '',
    fare: '',
  }
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [successmessage, setsuccessmessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/addfares', values)
      .then(res => {
        if (res.data.status === 'Success') {
          console.log(res);
          setsuccessmessage('Fare Added sucessfully!');}
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Error submitting the Fare information..');
      });
  };


  return (
    <div className=" w-full h-[28rem] flex justify-center items-center ">   
        <div className="w-4/5 rounded-xl bg-white p-4 shadow">
          <p className="text-md font-bold text-center text-gray-900">Enter the Route Info</p>
          {errorMessage && (
              <p className={`text-red-500 text-sm font-bold text-center mt-2 animate-error ${errorMessage && 'animate'}`}>
                {errorMessage}
              </p>
          )}
          {successmessage && (
              <p className={`text-green-500 text-sm font-bold text-center mt-2 animate-error ${successmessage && 'animate'}`}>
                {successmessage}
              </p>
          )}
          <form action="" method='POST' onSubmit={handleSubmit}>
          <div className="flex flex-row flex-wrap w-full gap-24 justify-center mb-5">
            <div className="w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Fare ID
              </label>
              <input
                className="flex h-7  w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter the Fare ID"
                id="firstName"
                onChange={e => setValues({...values,fareid:e.target.value})}
              ></input>
            </div>

            <div className=" w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Route Number
              </label>
              <input
                className="flex h-7 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter the Route Number"
                id="lastName"
                onChange={e => setValues({...values,routeid:e.target.value})}
              ></input>
            </div> 
          </div>

          <div className="flex flex-row flex-wrap w-full gap-24 justify-center mb-5 ">
            <div className="w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
               Fare
              </label>
              <input
                className="flex h-7  w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter the Fare"
                id="firstName"
                onChange={e => setValues({...values,fare:e.target.value})}
              ></input>
            </div>

            <div className=" w-1/3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Fare(c)
              </label>
              <input
                className="flex h-7 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter the Fare(c)"
                id="lastName"
                onChange={e => setValues({...values,cfare:e.target.value})}
              ></input>
            </div> 
          </div>

          <div className="flex flex-row items-center justify-center">
              <button
                type="submit"
                className=" rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Submit
              </button>
            </div>
            </form>
        </div>
      </div>

  );
}
export default AddFaresform


