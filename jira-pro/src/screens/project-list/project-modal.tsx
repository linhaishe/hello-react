import React from 'react';
import { Drawer, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { projectListsActions, selectProjectModalOpen } from './project-list.slice';

function ProjectModal() {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);

  return (
    <Drawer
      visible={projectModalOpen}
      width='100%'
      onClose={() => dispatch(projectListsActions.closeProjectModal())}
    >
      <h1>ProjectModal</h1>
      <Button onClick={() => dispatch(projectListsActions.closeProjectModal())}>关闭</Button>
    </Drawer>
  );
}

export default ProjectModal;
