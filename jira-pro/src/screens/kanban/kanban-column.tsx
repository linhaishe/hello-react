import React from 'react';
import styled from '@emotion/styled';
import { Card } from 'antd';
import { Kanban } from '../../types/kanban';
import { useTasks } from '../../utils/task';
import { useTaskTypes } from '../../utils/task-type';
import taskIcon from '../../assets/finished.svg';
import bugIcon from '../../assets/recorder.svg';
import { useTasksSearchParams } from './utils';

const Container = styled.div`
  min-width: 27rem;
  border-radius: 6px;
  background-color: rgb(244, 245, 247);
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem 1rem;
  margin-right: 1.5rem;
`;

const TasksContainer = styled.div`
  overflow: scroll;
  flex: 1;

  ::-webkit-scrollbar {
    display: none;
  }
`;

function TaskTypeIcon({ id }: { id: number }) {
  const { data: taskTypes } = useTaskTypes();
  const name = taskTypes?.find((taskType) => taskType.id === id)?.name;

  if (!name) {
    return null;
  }

  return (
    <img
      alt=''
      src={name === 'task' ? taskIcon : bugIcon}
    />
  );
}

function KanbanColumn({ kanban }: { kanban: Kanban }) {
  const { data: allTasks } = useTasks(useTasksSearchParams());
  const tasks = allTasks?.filter((task) => task.kanbanId === kanban.id);

  return (
    <Container>
      <h3>{kanban.name}</h3>
      <TasksContainer>
        {tasks?.map((task) => (
          <Card
            style={{ marginBottom: '0.5rem' }}
            key={task.id}
          >
            {task.name}
            <TaskTypeIcon id={task.typeId} />
          </Card>
        ))}
      </TasksContainer>
    </Container>
  );
}

export default KanbanColumn;
