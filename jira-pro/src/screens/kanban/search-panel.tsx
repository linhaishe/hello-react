import React from 'react';
import { Input, Button } from 'antd';
import { useTasksSearchParams } from './utils';
import { useSetUrlSearchParam } from '../../utils/url';
import { Row } from '../../components/libs';
import UserSelect from '../../components/user-select';
import TaskTypeSelect from '../../components/task-type-select';

function SearchPanel() {
  const searchParams = useTasksSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const reset = () => {
    setSearchParams({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  };

  return (
    <Row
      marginBottom={4}
      gap
    >
      <Input
        style={{ width: '20rem' }}
        placeholder='任务名'
        value={searchParams.name}
        onChange={(evt) => setSearchParams({ name: evt.target.value })}
      />
      <UserSelect
        defaultOptionName='经办人'
        value={searchParams.processorId}
        onChange={(value) => setSearchParams({ processorId: value })}
      />
      <TaskTypeSelect
        defaultOptionName='类型'
        value={searchParams.typeId}
        onChange={(value) => setSearchParams({ typeId: value })}
      />
      <Button onClick={reset}>清除筛选</Button>
    </Row>
  );
}

export default SearchPanel;
