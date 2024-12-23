// import React from 'react'

// const TasklistNumbers = ({data}) => {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen'>
//         <div className='px-9 py-6 w-[45%] rounded-xl bg-sky-500'>
//             <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
//             <h3 className='text-xl font-medium'>New Task</h3>
//         </div>
//         <div className='px-9 py-6 w-[45%] rounded-xl bg-green-500'>
//             <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
//             <h3 className='text-xl font-medium'>Completed Task</h3>
//         </div>
//         <div className='px-9 py-6 w-[45%] rounded-xl bg-yellow-500'>
//             <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
//             <h3 className='text-xl font-medium'>Active Task</h3>
//         </div>
//         <div className='px-9 py-6 w-[45%] rounded-xl bg-red-500'>
//             <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
//             <h3 className='text-xl font-medium'>Failed Task</h3>
//         </div>

//     </div>
//   )
// }

// export default TasklistNumbers
import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-lime-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9  bg-lime-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9  bg-lime-500 '>
            <h2 className='text-3xl  font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5  font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-lime-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers