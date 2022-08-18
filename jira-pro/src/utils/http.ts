import qs from 'qs';
import * as auth from '../auth-provider';
// eslint-disable-next-line import/no-cycle
import { useAuth } from '../context/auth-context';

const apiUrl = process.env.REACT_APP_API_URL;

interface IConfig extends RequestInit {
  token?: string;
  data?: object;
}

export async function http(endpoint: string, { data, token, headers, ...customConfig }: IConfig = {}) {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };
  // get请求的参数是放在url里的，而post的参数是放在body里的
  // axios 和fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常,fetch的catch除非断网等情况下才会抛出异常
  if (config.method.toUpperCase() === 'GET') {
    // eslint-disable-next-line no-param-reassign
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: '请重新登录' });
    }

    const dataSource = await res.json();
    if (res.ok) {
      return dataSource;
    }
    return Promise.reject(dataSource);
  });
}

export const useHttp = () => {
  const { user } = useAuth();
  // [endpoint, config]: [string, IConfig]
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token });
};
