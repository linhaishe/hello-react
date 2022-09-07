import React, { useEffect, useState } from 'react';
import { Card, Input, Button } from 'antd';
import { useAddTask } from '../../utils/task';
import { useProjectIdInUrl, useTasksQueryKey } from './utils';

export function CreateTask({ kanbanId }: { kanbanId: number }) {
  const [name, setName] = useState('');
  const { mutateAsync: addTask } = useAddTask(useTasksQueryKey());
  const projectId = useProjectIdInUrl();
  const [inputMode, setInputMode] = useState(false);

  const submit = async () => {
    await addTask({ projectId, name, kanbanId });
    setInputMode(false);
    setName('');
  };

  const toggle = () => setInputMode((mode) => !mode);

  useEffect(() => {
    if (!inputMode) {
      setName('');
    }
  }, [inputMode]);

  if (!inputMode) {
    return <Button onClick={toggle}>+创建事务</Button>;
  }

  return (
    <Card>
      <Input
        onBlur={toggle}
        placeholder='需要做些什么'
        autoFocus
        onPressEnter={submit}
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </Card>
  );
}
