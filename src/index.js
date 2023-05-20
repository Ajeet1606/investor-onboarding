import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "./index.css"

import App from './App';
import Signup from './Signup';
import Dashboard from './Dashboard';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

