import React, { useEffect, useState } from 'react';
import qs from 'qs';
import SearchPanel from './search-panel';
import List from './list';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { useHttp } from '../../utils/http';

const apiUrl = process.env.REACT_APP_API_URL;

function ProjectListScreens() {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({
    name: '',
    personId: '',
  });
  const [lists, setList] = useState([]);
  const debouncedParam = useDebounce(params, 2000);
  const client = useHttp();
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

  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client('users').then(setUsers);
  });

  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List lists={lists} users={users} />
    </div>
  );
}

export default ProjectListScreens;
