import React from 'react';
import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "./index.css"

import Dashboard from './Dashboard';
import UserContext from './UserContext';
import Signup from './Signup';


const AppComponent = () => {

  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    country: "",
    state: "",
    city: "",
    pin: "",
    agreement: false,
  });

  return(
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Outlet/>
    </UserContext.Provider>
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent/>,
    children: [
      {
        path: "/",
        element: <Signup/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={appRouter}/>
  
  </React.StrictMode>
);

