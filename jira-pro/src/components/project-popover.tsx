import React from 'react';
import { useDispatch } from 'react-redux';
import { Divider, List, Popover, Typography } from 'antd';
import styled from '@emotion/styled';
import { useProject } from '../utils/project';
import { ButtonNoPadding } from './libs';
import { projectListsActions } from '../screens/project-list/project-list.slice';

const ContentContainer = styled.div`
  min-width: 30rem;
`;

function ProjectPopover() {
  const dispatch = useDispatch();
  const { data: projects } = useProject();
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
      <ButtonNoPadding
        onClick={() => dispatch(projectListsActions.openProjectModal())}
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
