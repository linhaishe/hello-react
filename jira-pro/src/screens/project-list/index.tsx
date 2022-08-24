import React from 'react';
import styled from '@emotion/styled';
import SearchPanel from './search-panel';
import List from './list';
import { useDebounce, useDocumentTitle, useMount } from '../../utils';
import { useHttp } from '../../utils/http';
import { useProject } from '../../utils/project';
import { useUsers } from '../../utils/user';
import { useProjectSearchParams } from './utils';

const Container = styled.div`
  padding: 3.2rem;
`;

function ProjectListScreens() {
  const [param, setParam] = useProjectSearchParams();
  const client = useHttp();
  const { isLoading, data: list, retry } = useProject(useDebounce(param, 200));
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
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        params={param}
        setParams={setParam}
        users={users || []}
      />
      <List
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
        reFresh={retry}
      />
    </Container>
  );
}

export default ProjectListScreens;
