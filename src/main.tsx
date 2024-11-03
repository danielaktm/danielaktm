import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Checkout from './checkout/Checkout';
import MarketingPage from './marketing-page/MarketingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MarketingPage />,
  },
  {
    path: "/checkout",
    element:  <Checkout />,
  },
  {
    path: "/vite-default",
    element:  <App />,
  },
], { 'basename': '/danielaktm'} );


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
