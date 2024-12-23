
import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './ComplitTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full py-1 mt-16"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;

