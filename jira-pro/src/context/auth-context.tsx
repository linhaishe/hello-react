import React, { ReactNode, useState } from 'react';
import * as auth from '../auth-provider';
import { User } from '../screens/project-list/search-panel';
// eslint-disable-next-line import/no-cycle
import { http } from '../utils/http';
import { useMount } from '../utils';
import { useAsync } from '../utils/use-async';
import { FullPageErrorFallBack, FullPageLoading } from '../components/libs';

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }

  return user;
};

const AuthContext = React.createContext<
  | undefined
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
>(undefined);
AuthContext.displayName = 'AuthContext';
// ff
export function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<User | null>(null);
  const { data: user, error, isLoading, isIdle, isError, run, setData: setUser } = useAsync();
  const login = (form: AuthForm) => auth.login(form).then((users) => setUser(users));
  const register = (form: AuthForm) => auth.register(form).then((users) => setUser(users));
  const logout = () => auth.logout().then(() => setUser(null));
  const users: User | null = user as User | null;

  // 处理刷新时丢失用户信息，自动退出。
  // eslint-disable-next-line consistent-return
  useMount(() => {
    console.log('run(bootstrapUser());');
    run(bootstrapUser());
  });

  if (isIdle || isLoading) {
    console.log('isIdle || isLoading');
    return <FullPageLoading />;
  }

  if (isError) {
    console.log('isError');
    return <FullPageErrorFallBack error={error} />;
  }

  // return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ user: users, login, register, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw Error('useAuth必须在AuthProvider中使用');
  }

  return context;
};
