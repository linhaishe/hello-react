import React, { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './auth-context';

export default function AppProviders({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
  // return <AuthProvider children={children} />;
}
