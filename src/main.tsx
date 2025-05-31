import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme/ThemeProvider';
import App from './App';
import './app/globals.css';

// Define the future flags type
type RouterFutureFlags = {
  v7_fetcherPersist: boolean;
  v7_normalizeFormMethod: boolean;
  v7_partialHydration: boolean;
  v7_relativeSplatPath: boolean;
  v7_skipActionErrorRevalidation: boolean;
  v7_startTransition: boolean;
};

const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: <App />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    } as RouterFutureFlags,
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="creatornex-theme">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
