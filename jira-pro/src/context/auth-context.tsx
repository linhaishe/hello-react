import React, { ReactNode, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { useQueryClient } from 'react-query';
import * as auth from '../auth-provider';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import { http } from '../utils/http';
import { useMount } from '../utils';
import { useAsync } from '../utils/use-async';
import { FullPageErrorFallBack, FullPageLoading } from '../components/libs';
import { User } from '../types/user';

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

export function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<User | null>(null);
  const queryClient = useQueryClient();
  const { data: user, error, isLoading, isIdle, isError, run, setData: setUser } = useAsync();
  const login = (form: AuthForm) => auth.login(form).then((users) => setUser(users));
  const register = (form: AuthForm) => auth.register(form).then((users) => setUser(users));
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      queryClient.clear();
    });
  const users: User | null = user as User | null;

  // 处理刷新时丢失用户信息，自动退出。
  // eslint-disable-next-line consistent-return
  useMount(() => {
    run(bootstrapUser());
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
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
