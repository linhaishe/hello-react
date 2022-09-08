import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Spin } from 'antd';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDocumentTitle } from '../../utils';
import {
  useKanbansQueryKey,
  useKanbansSearchParams,
  useProjectInUrl,
  useTasksQueryKey,
  useTasksSearchParams,
} from './utils';
import KanbanColumn from './kanban-column';
import { useKanbans, useReorderKanban } from '../../utils/kanban';
import SearchPanel from './search-panel';
import { ScreenContainer } from '../../components/libs';
import { useReorderTask, useTasks } from '../../utils/task';
import CreateKanban from './create-kanban';
import TaskModal from './task-modal';
import { Drop, Drag, DropChild } from '../../components/drag-and-drop';

export const ColumnsContainer = styled(DropChild)`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;

export const useDragEnd = () => {
  const { data: kanbans } = useKanbans(useKanbansSearchParams());
  const { mutate: reorderKanban } = useReorderKanban(useKanbansQueryKey());
  const { mutate: reorderTask } = useReorderTask(useTasksQueryKey());
  const { data: allTasks = [] } = useTasks(useTasksSearchParams());
  return useCallback(
    ({ source, destination, type }: DropResult) => {
      if (!destination) {
        return;
      }

      // 看板排序
      if (type === 'COLUMN') {
        // 提起来的看板的id
        const fromId = kanbans?.[source.index].id;
        const toId = kanbans?.[destination.index].id;
        if (!fromId || !toId || fromId === toId) {
          return;
        }
        const typeOrder: 'before' | 'after' = destination.index > source.index ? 'after' : 'before';
        reorderKanban({ fromId, referenceId: toId, type: typeOrder });
      }

      // task 的排序
      if (type === 'ROW') {
        const fromKanbanId = +source.droppableId;
        const toKanbanId = +destination.droppableId;

        // if (fromKanbanId === toKanbanId) {
        //   return;
        // }

        const fromTask = allTasks.filter((task) => task.kanbanId === fromKanbanId)[source.index];
        const toTask = allTasks.filter((task) => task.kanbanId === toKanbanId)[destination.index];

        if (fromTask?.id === toTask?.id) {
          return;
        }
        reorderTask({
          fromId: fromTask?.id,
          referenceId: toTask?.id,
          fromKanbanId,
          toKanbanId,
          // type: fromKanbanId === toKanbanId && destination.index > source.index ? 'after' : 'before',
          type: destination.index > source.index ? 'after' : 'before',
        });
      }
    },
    [kanbans, reorderKanban, allTasks, reorderTask],
  );
};

function Kanban() {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans, isLoading: kanbanIsLoading } = useKanbans(useKanbansSearchParams());
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = kanbanIsLoading || taskIsLoading;
  const onDragEnd = useDragEnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
