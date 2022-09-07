import React from 'react';
import styled from '@emotion/styled';
import { Spin } from 'antd';
import { useDocumentTitle } from '../../utils';
import { useKanbansSearchParams, useProjectInUrl, useTasksSearchParams } from './utils';
import KanbanColumn from './kanban-column';
import { useKanbans } from '../../utils/kanban';
import SearchPanel from './search-panel';
import { ScreenContainer } from '../../components/libs';
import { useTasks } from '../../utils/task';
import CreateKanban from './create-kanban';

export const ColumnsContainer = styled.div`
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
    <ScreenContainer>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      {isLoading ? (
        <Spin size='large' />
      ) : (
        <ColumnsContainer>
          {kanbans?.map((kanban) => (
            <KanbanColumn
              key={kanban.id}
              kanban={kanban}
            />
          ))}
          <CreateKanban />
        </ColumnsContainer>
      )}
    </ScreenContainer>
  );
}

export default Kanban;
