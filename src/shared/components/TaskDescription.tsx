import React from 'react';

const TaskDescription = () => {
  return (
    <div className="card card-bordered shadow-md mb-8">
      <div className="card-body">
        <h1 className="card-title text-3xl">Task description</h1>

        <ul className="">
          <li className="">
            <p>Get data from the API endpoint and make sure it properly displays.</p>
            <code className="kbd">https://jsonplaceholder.typicode.com/posts</code>
          </li>

          <li>
            <p>Add loading state and indication - just render Loader component</p>
          </li>

          <li>
            <p>Make button 'refresh data' work properly</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskDescription;
