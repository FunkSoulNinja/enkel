import React, { useState } from 'react';
import styled from 'styled-components/native';

import Task, { TaskItem } from '~/components/Task';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(['task 1', 'task 2']);

  return (
    <Wrapper>
      {tasks.map((task) => (
        <Task key={task} taskData={task} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
`;

export default Home;
