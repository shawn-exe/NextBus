import {React } from 'react'
import {useNavigate} from 'react-router-dom';
import Logo from '../assets/logo.svg'
import Cancel from '../assets/cancel.svg'
import { useState } from 'react'
import axios from 'axios'
function Signupcomponent(props) {
  /*const [values,setValues]=useState({
    username: '',
    password: '',
  }
  );*/
 const [errorMessage, setErrorMessage] = useState('');
  //const navigate=useNavigate();
 /* const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/loginuser', values)
      .then(res => {
        if (res.data.status === 'Success') {
          navigate('/mainpage');
        } else {
          setErrorMessage('Invalid Credentials. Please try again.');
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Invalid Credentials!! Please try again..');
      });
  };*/



  return (
    <div className=' flex flex-row w-full h-screen justify-center items-center align-middle bg-semitrans'>
      <div className='w-full flex flex-row justify-center fixed gap-1'>
      <div className="rounded-[2rem] w-1/4 h-[20rem] shadow-2xl bg-white flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className=" flex justify-center">
               <img src={Logo} alt="" />
              </div>
              {errorMessage && (
              <p className={`text-red-500 text-sm font-bold text-center mt-2 animate-error ${errorMessage && 'animate'}`}>
                {errorMessage}
              </p>
            )}
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Create Your Personal Account
              </h2>             
              <form action="#" method="POST" className="mt-8"  >
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
                        name='username'
                        placeholder="username"
                        //onChange={e =>setValues({...values,username:e.target.value})}
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
                        //onChange={e =>setValues({...values,password:e.target.value})}
                      ></input>
                    </div>
                  </div>
                  <div className='flex justify-center items-center w-full'>
                 
                     <button
                       type="submit"
                         className="cursor-pointer flex w-full items-center align-middle text-center justify-center rounded-lg bg-black py-1 px-2 font-semibold leading-7 text-white hover:bg-black/80"
                              >
                            Login
                          </button>
                          
                  </div>
                </div>
              </form>
              <p className="mt-2 text-center text-sm text-gray-600 ">
                Already an user?{' '}
                <a
                  href="#"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                  onClick={props.onClick1}
                >
                  Log in
                </a>
             </p> 
            </div>
          </div>   
          <div className='cursor-pointer'>
            <img onClick={props.onClick} src={Cancel} alt="" />
          </div>    
          </div>
    </div>
  )
}
export default Signupcomponent