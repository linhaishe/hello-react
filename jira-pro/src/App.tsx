import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
// import AuthenticatedApp from './authenticated-app';
// import UnauthenticatedApp from './unauthenticated-app';
import { ErrorBoundary } from './components/error-boundaries';
import { FullPageErrorFallBack, FullPageLoading } from './components/libs';

function App() {
  const AuthenticatedApp = React.lazy(() => import('./authenticated-app'));
  const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'));
  const { user } = useAuth();
  return (
    <div className='App'>
      <ErrorBoundary fallbackRender={FullPageErrorFallBack}>
        <React.Suspense fallback={<FullPageLoading />}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
