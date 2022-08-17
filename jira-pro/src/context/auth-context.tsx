import React, { ReactNode, useState } from 'react';
import * as auth from '../auth-provider';
import { User } from '../screens/project-list/search-panel';

interface AuthForm {
  username: string;
  password: string;
}

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
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then((users) => setUser(users));
  const register = (form: AuthForm) => auth.register(form).then((users) => setUser(users));
  const logout = () => auth.logout().then(() => setUser(null));

  // return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw Error('useAuth必须在AuthProvider中使用');
  }

  return context;
};
