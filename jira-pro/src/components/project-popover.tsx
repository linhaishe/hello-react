import React from 'react';
import { Button, Divider, List, Popover, Typography } from 'antd';
import styled from '@emotion/styled';
import { useProject } from '../utils/project';
import { ButtonNoPadding } from './libs';

const ContentContainer = styled.div`
  min-width: 30rem;
`;

function ProjectPopover() {
  const { data: projects, isLoading } = useProject();
  const pinnedProjects = projects?.filter((project) => project.pin);

  const content = (
    <ContentContainer>
      <Typography.Text type='secondary'>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item>
            <List.Item.Meta title={project.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding type='link'>创建项目</ButtonNoPadding>
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
