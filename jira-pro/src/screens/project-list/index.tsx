import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import SearchPanel from './search-panel';
import List from './list';
import { useDebounce, useDocumentTitle, useMount } from '../../utils';
import { useHttp } from '../../utils/http';
import { useProjects } from '../../utils/project';
import { useUsers } from '../../utils/user';
import { useProjectModal, useProjectSearchParams } from './utils';
import { ErrorBox, Row } from '../../components/libs';
import { Profiler } from '../../components/profiler';

const Container = styled.div`
  padding: 3.2rem;
`;

function ProjectListScreens() {
  const { open } = useProjectModal();
  const [param, setParam] = useProjectSearchParams();
  const client = useHttp();
  const { isLoading, data: list, error } = useProjects(useDebounce(param, 200));
  //  useUsers 加入useDebounce会导致数据返回延迟，options筛选匹配时没有拿到数据显示未知
  const { data: users } = useUsers();
  // const { run, isLoading, error, data: list } = useAsync<Project[]>();
  // `${apiUrl}/projects?name=${params.name}$personId=${params.personId}`
  // `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`

  // useEffect(() => {
  //   fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (res) => {
  //     if (res.ok) {
  //       setList(await res.json());
  //     }
  //   });
  // }, [debouncedParam]);

  // useEffect(() => {
  //   fetch(`${apiUrl}/users`).then(async (res) => {
  //     if (res.ok) {
  //       // console.log('users', await res.json());
  //       setUsers(await res.json());
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   run(client('projects', { data: cleanObject(debouncedParam) }));
  // }, [debouncedParam]);

  useMount(() => {
    client('users');
  });

  useDocumentTitle('项目列表', false);

  return (
    <Profiler id='项目列表'>
      <Container>
        <Row between>
          <h1>项目列表</h1>
          <Button onClick={open}>创建项目</Button>
        </Row>
        <SearchPanel
          params={param}
          setParams={setParam}
          users={users || []}
        />
        <ErrorBox error={error} />
        <List
          loading={isLoading}
          dataSource={list || []}
          users={users || []}
        />
      </Container>
    </Profiler>
  );
}

export default ProjectListScreens;
