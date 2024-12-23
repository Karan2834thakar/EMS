// import React, { useState } from 'react'


// const Login = ({handleLogin}) => {
//     const [email, setemail] = useState('')
//     const [password, setPassword] = useState('')
//     const submitHandler=(e)=>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setemail('')
//         setPassword('')
//     }
//   return (
//     <div className='flex h-screen w-screen justify-center items-center'>
//         <div className='border-2 rounded-xl border-emerald-700 p-20'>
//             <form 
//             onSubmit={(e)=>{submitHandler(e)}}
//             className='flex flex-col items-center justify-center'>
//                 <input
//                 value={email}
//                 name='email'
//                 onChange={(e)=>{setemail(e.target.value)}}
//                 required className='  outline-none bg-transparent text-xl py-3 px-5 border-2  border-emerald-700  placeholder-slate-500 rounded-full ' type="email" placeholder='Enter Your Email' />
//                 <input
//                 value={password}
//                 name='password'
//                 onChange={(e)=>{setPassword(e.target.value)}}
//                 required className='  outline-none bg-transparent text-xl py-3 px-5 border-2 mt-4 border-emerald-700  placeholder-slate-500 rounded-full ' type="password" placeholder='Enter Your Password' />
//                 <button  className=' text-slate-800 hover:text-white outline-none mt-4 bg-emerald-700 text-xl py-3 px-16 placeholder-slate-500 rounded-full active:scale-105 items-center '>Login</button>
//             </form>

//         </div>

//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <>
    <div className='absolute border-4 border-emerald-700 h-screen w-screen items-center justify-center  p-4'>
    <div>
        <h1 className=' text-emerald-400 text-4xl font-bold items-center justify-center  px-72 py-16'>Welcome to Workforce Manager</h1>
        <h4 className=' text-gray-50 text-sm  items-center justify-center px-56 py-16'>The Key to a Smooth-Running Team Awaits. Login to access the system</h4>
    </div>
        <div className=' border-2 rounded-xl border-emerald-600  p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-10 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-10 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className=' active:scale-95 mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-20  rounded-full placeholder:text-white'>Log in</button>
                <h4 className='py-2 text-gray-400'>Access the system by logging in with your assigned email and password</h4>
            </form>
        </div>
        
    </div>
    </>
  )
}

export default Login