import React, { ReactNode, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as auth from '../auth-provider';
import { User } from '../screens/project-list/search-panel';
import { http } from '../utils/http';
import { useMount } from '../utils';
import { useAsync } from '../utils/use-async';
import { FullPageErrorFallBack, FullPageLoading } from '../components/libs';
import * as authStore from '../store/auth.slice';
import { bootstrap, selectUser } from '../store/auth.slice';

export interface AuthForm {
  username: string;
  password: string;
}

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }

  return user;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<User | null>(null);
  const { error, isLoading, isIdle, isError, run } = useAsync<User | null>();
  // const users: User | null = user as User | null;
  // @ts-ignore
  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();

  // 处理刷新时丢失用户信息，自动退出。
  // eslint-disable-next-line consistent-return
  useMount(() => {
    run(dispatch(bootstrap()));
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallBack error={error} />;
  }

  // return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <div>{children}</div>;
}

export const useAuth = () => {
  // @ts-ignore
  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();
  const user = useSelector(selectUser);

  const login = useCallback((form: AuthForm) => dispatch(authStore.login(form)), [dispatch]);
  const register = useCallback((form: AuthForm) => dispatch(authStore.register(form)), [dispatch]);
  const logout = useCallback(() => dispatch(authStore.logout()), [dispatch]);

  return {
    user,
    login,
    register,
    logout,
  };
};
