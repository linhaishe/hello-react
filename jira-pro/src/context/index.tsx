import React, { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './auth-context';

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
  // return <AuthProvider children={children} />;
}
