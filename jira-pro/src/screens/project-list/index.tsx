import React, { useEffect, useState } from 'react';
import qs from 'qs';
import SearchPanel from './search-panel';
import List from './list';
import { cleanObject, useDebounce } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

function ProjectListScreens() {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({
    name: '',
    personId: '',
  });
  const [lists, setList] = useState([]);
  const debouncedParam = useDebounce(params, 2000);
  // `${apiUrl}/projects?name=${params.name}$personId=${params.personId}`
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        // console.log('users', await res.json());
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List lists={lists} users={users} />
    </div>
  );
}

export default ProjectListScreens;
