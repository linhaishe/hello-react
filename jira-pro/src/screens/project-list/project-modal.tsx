import React from 'react';
import { Drawer, Button } from 'antd';

function ProjectModal(props: { projectModalOpen: boolean; onClose: () => void }) {
  const { projectModalOpen, onClose } = props;

  return (
    <Drawer
      visible={projectModalOpen}
      width='100%'
      onClose={onClose}
    >
      <h1>ProjectModal</h1>
      <Button onClick={onClose}>关闭</Button>
    </Drawer>
  );
}

export default ProjectModal;
