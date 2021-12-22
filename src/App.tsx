import React, { useEffect, useState } from 'react';
import Layout from './shared/components/Layout';
import Loader from './shared/components/Loader';
import TaskDescription from './shared/components/TaskDescription';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [data, setData] = useState<Post[] | null>(null);

  return (
    <Layout>
      <h1 className="text-4xl font-bold">Test task 1 - data retrieval</h1>
      <TaskDescription />

      <div>{/* you can render data from API here */}</div>
    </Layout>
  );
}

export default App;
