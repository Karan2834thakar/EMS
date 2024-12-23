// import React, { useContext, useEffect, useState } from 'react'

// import AdminDashboard from './components/DashBoard/AdminDashboard'
// import Login from './components/Auth/Login'
// import { AuthContext } from './context/AuthProvider'
// import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'



// const App = () => {

//   const [user, setUser] = useState('')
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData, SetUserData] = useContext(AuthContext)
//   // const authData=useContext(AuthContext)


//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('loggedInUser')

//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }

//   }, [])

//   const handleLogin = (email, password) => {
//     console.log("login handled")
//     if (email == 'admin@me.com' && password == '123') {
      
//       console.log("if")
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (userData) {
//       console.log("else if")
//       console.log(userData);
//       const employee = userData.find((e) => email == e.email && e.password == password)
//       if (employee) {
//         console.log("else if if")
//         setUser('employee')
//         setLoggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
//       }else {
//         alert("Invalid Credentials");
//         console.log("else if else")
//       }
//     }
//     else {
//       alert("Invalid Credentials");
//       console.log("else")
//     }
//   }

//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
//     </>
//   )
// }


// export default App
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App