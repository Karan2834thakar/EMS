
import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex flex-wrap mt-10 justify-between gap-5'>
      <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-lime-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-lime-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-lime-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-lime-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
