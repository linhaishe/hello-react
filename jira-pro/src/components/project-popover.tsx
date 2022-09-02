import React from 'react';
import { Divider, List, Popover, Typography } from 'antd';
import styled from '@emotion/styled';
import { useProject } from '../utils/project';
import { ButtonNoPadding } from './libs';
import { useProjectModal } from '../screens/project-list/utils';

const ContentContainer = styled.div`
  min-width: 30rem;
`;

function ProjectPopover() {
  const { open } = useProjectModal();
  const { data: projects } = useProject();
  const pinnedProjects = projects?.filter((project) => project.pin);

  const content = (
    <ContentContainer>
      <Typography.Text type='secondary'>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item key={project.id}>
            <List.Item.Meta title={project.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding
        onClick={open}
        type='link'
      >
        创建项目
      </ButtonNoPadding>
    </ContentContainer>
  );
  return (
    <Popover
      placement='bottom'
      content={content}
    >
      <span>项目</span>
    </Popover>
  );
}

export default ProjectPopover;
