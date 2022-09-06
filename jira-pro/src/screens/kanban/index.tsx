import React from 'react';
import styled from '@emotion/styled';
import { useDocumentTitle } from '../../utils';
import { useKanbansSearchParams, useProjectInUrl } from './utils';
import KanbanColumn from './kanban-column';
import { useKanbans } from '../../utils/kanban';

const ColumnsContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-right: 2rem;
`;

function Kanban() {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans } = useKanbans(useKanbansSearchParams());

  return (
    <div>
      <h1>{currentProject?.name}看板</h1>
      <ColumnsContainer>
        {kanbans?.map((kanban) => (
          <KanbanColumn
            key={kanban.id}
            kanban={kanban}
          />
        ))}
      </ColumnsContainer>
    </div>
  );
}

export default Kanban;
