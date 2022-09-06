import { useQuery } from 'react-query';
import { useHttp } from './http';
import { TaskTypes } from '../types/task-type';

export const useTaskTypes = () => {
  const client = useHttp();

  return useQuery<TaskTypes[], Error>(['taskTypes'], () => client('taskTypes'));
};
