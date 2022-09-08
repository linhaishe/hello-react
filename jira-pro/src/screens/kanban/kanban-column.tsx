import React from 'react';
import styled from '@emotion/styled';
import { Card, Modal, Menu, Button, Dropdown } from 'antd';
import { Kanban } from '../../types/kanban';
import { useTasks } from '../../utils/task';
import { useTaskTypes } from '../../utils/task-type';
import taskIcon from '../../assets/finished.svg';
import bugIcon from '../../assets/recorder.svg';
import { useKanbansQueryKey, useTasksModal, useTasksSearchParams } from './utils';
import { CreateTask } from './create-task';
import { Task } from '../../types/task';
import { Mark } from '../../components/mark';
import { useDeleteKanban } from '../../utils/kanban';
import { Row } from '../../components/libs';
import { Drag, Drop, DropChild } from '../../components/drag-and-drop';

export const Container = styled.div`
  min-width: 27rem;
  border-radius: 6px;
  background-color: rgb(244, 245, 247);
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem 1rem;
  margin-right: 1.5rem;
`;

const TasksContainer = styled.div`
  //overflow: scroll;
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

function TaskCard({ task }: { task: Task }) {
  const { startEdit } = useTasksModal();
  const { name: keyword } = useTasksSearchParams();

  return (
    <Card
      style={{ marginBottom: '0.5rem', cursor: 'pointer' }}
      onClick={() => startEdit(task.id)}
    >
      <Mark
        name={task.name}
        keyword={keyword}
      />
      <TaskTypeIcon id={task.typeId} />
    </Card>
  );
}

function More({ kanban }: { kanban: Kanban }) {
  const { mutateAsync } = useDeleteKanban(useKanbansQueryKey());
  const startDelete = () => {
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '确定删除看板吗',
      onOk() {
        return mutateAsync({ id: kanban.id });
      },
    });
  };

  const menu = (
    <Menu
      onClick={startDelete}
      items={[
        {
          key: 'delete',
          label: '删除',
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <Button type='link'>...</Button>
    </Dropdown>
  );
}

export const KanbanColumn = React.forwardRef<HTMLDivElement, { kanban: Kanban }>(({ kanban, ...props }, ref) => {
  const { data: allTasks } = useTasks(useTasksSearchParams());
  const tasks = allTasks?.filter((task) => task.kanbanId === kanban.id);

  return (
    <Container
      {...props}
      ref={ref}
    >
      <Row between>
        <h3>{kanban.name}</h3>
        <More
          kanban={kanban}
          key={kanban.id}
        />
      </Row>
      <TasksContainer>
        <Drop
          droppableId={`task${kanban.id}`}
          type='ROW'
          direction='vertical'
        >
          <DropChild>
            {tasks?.map((task, index) => (
              <Drag
                draggableId={`task${task.id}`}
                index={index}
                key={task.id}
              >
                <div>
                  <TaskCard
                    task={task}
                    key={Math.random()}
                  />
                </div>
              </Drag>
            ))}
          </DropChild>
        </Drop>
        <CreateTask kanbanId={kanban.id} />
      </TasksContainer>
    </Container>
  );
});

export default KanbanColumn;
