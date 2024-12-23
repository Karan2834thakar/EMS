// import React, { useState } from 'react'

// const Header = ({  data, changeUser }) => {
// //  const [username,serUsername] = useState('')
// //   if(!data){
// //     serUsername('Admin')
// //   }
// //   else{
// //     serUsername(data.firstname)
// //   }
//   const logOutUser=()=>{
//     localStorage.setItem('loggedInUser','')
//     changeUser('')
//   }
//   return (
//     <div className='flex justify-between items-end '>
//         <h1 className='text-2xl font-medium'>Hello,<br /><span className='text-5xl font-semibold'>👋</span></h1>
//         <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white rounded px-5 py-2 active:scale-95'>Logout</button>
//     </div>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'


const Header = ({data,changeUser}) => {

  const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername('Employee')
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> {data?.firstName || 'Admin'}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header