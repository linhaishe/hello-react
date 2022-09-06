import React from 'react';
import { IdSelect } from './id-select';
import { useTaskTypes } from '../utils/task-type';

function TaskTypeSelect(props: React.ComponentProps<typeof IdSelect>) {
  const { data: TaskTypes } = useTaskTypes();

  return (
    <IdSelect
      options={TaskTypes || []}
      {...props}
    />
  );
}

export default TaskTypeSelect;
