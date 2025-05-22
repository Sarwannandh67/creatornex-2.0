import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from './components/Loading'; // You'll need to create this

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
// Add other routes as needed

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    ),
  },
  // Add other routes as needed
]); 