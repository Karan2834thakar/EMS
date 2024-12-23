// import React from 'react'
// import Header from '../others/Header'
// import TasklistNumbers from '../others/TasklistNumbers'
// import TaskList from '../tasklist/Tasklist'


// const EmployeeDashboard = ({data,changeUser}) => {
//   console.log(data)
//   return (
//     <div className='p-10 bg-[#1C1C1C] h-screen '>
        
//         <Header changeUser={changeUser} data={data} />
//         <TasklistNumbers data={data} />
//          <TaskList />
//     </div>
//   )
// }

// export default EmployeeDashboard
import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../tasklist/Tasklist'
// import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({changeUser,data}) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={changeUser} data={data}/>
        <TaskListNumbers data={data} />
        <TaskList data={data} />
        
    </div>
  )
}

export default EmployeeDashboard