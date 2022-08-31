import React from 'react';
import { Drawer, Button } from 'antd';
import { useProjectModal } from './utils';

function ProjectModal() {
  const { projectModalOpen, close } = useProjectModal();

  return (
    <Drawer
      visible={projectModalOpen}
      width='100%'
      onClose={close}
    >
      <h1>ProjectModal</h1>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
}

export default ProjectModal;
