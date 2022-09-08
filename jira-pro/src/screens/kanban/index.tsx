import React from 'react';
import styled from '@emotion/styled';
import { Spin } from 'antd';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDocumentTitle } from '../../utils';
import { useKanbansSearchParams, useProjectInUrl, useTasksSearchParams } from './utils';
import KanbanColumn from './kanban-column';
import { useKanbans } from '../../utils/kanban';
import SearchPanel from './search-panel';
import { ScreenContainer } from '../../components/libs';
import { useTasks } from '../../utils/task';
import CreateKanban from './create-kanban';
import TaskModal from './task-modal';
import { Drop, Drag, DropChild } from '../../components/drag-and-drop';

export const ColumnsContainer = styled(DropChild)`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;

function Kanban() {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans, isLoading: kanbanIsLoading } = useKanbans(useKanbansSearchParams());
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = kanbanIsLoading || taskIsLoading;

  return (
    <DragDropContext onDragEnd={() => {}}>
      <ScreenContainer>
        <h1>{currentProject?.name}看板</h1>
        <SearchPanel />
        {isLoading ? (
          <Spin size='large' />
        ) : (
          <Drop
            type='COLUMN'
            direction='horizontal'
            droppableId='kanban'
          >
            <ColumnsContainer>
              {kanbans?.map((kanban, index) => (
                <Drag
                  key={kanban.id}
                  draggableId={`kanban${kanban.id}`}
                  index={index}
                >
                  <KanbanColumn
                    key={kanban.id}
                    kanban={kanban}
                  />
                </Drag>
              ))}
              <CreateKanban />
            </ColumnsContainer>
          </Drop>
        )}
        <TaskModal />
      </ScreenContainer>
    </DragDropContext>
  );
}

export default Kanban;
