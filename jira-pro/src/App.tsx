import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
import AuthenticatedApp from './authenticated-app';
import UnauthenticatedApp from './unauthenticated-app';
import { ErrorBoundary } from './components/error-boundaries';
import { FullPageErrorFallBack } from './components/libs';

function App() {
  const { user } = useAuth();
  return (
    <div className='App'>
      <ErrorBoundary fallbackRender={FullPageErrorFallBack}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
