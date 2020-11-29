import React from 'react';
import styled from 'styled-components/native';

export type TaskItem = string;

interface TaskProps {
  taskData: TaskItem;
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  return (
    <Wrapper>
      <Text>{taskData}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: gray;
`;

const Text = styled.Text`
  font-size: 16px;
`;

export default Task;
