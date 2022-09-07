import React from 'react';
import styled from '@emotion/styled';
import { useDocumentTitle } from '../../utils';
import { useKanbansSearchParams, useProjectInUrl } from './utils';
import KanbanColumn from './kanban-column';
import { useKanbans } from '../../utils/kanban';
import SearchPanel from './search-panel';
import { ScreenContainer } from '../../components/libs';

const ColumnsContainer = styled.div`
  display: flex;
  //overflow-x: scroll;
  flex: 1;
`;

function Kanban() {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans } = useKanbans(useKanbansSearchParams());

  return (
    <ScreenContainer>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      <ColumnsContainer>
        {kanbans?.map((kanban) => (
          <KanbanColumn
            key={kanban.id}
            kanban={kanban}
          />
        ))}
      </ColumnsContainer>
    </ScreenContainer>
  );
}

export default Kanban;
