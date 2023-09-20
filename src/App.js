import "./App.scss";
import React from "react";
import { createBrowserRouter,Router, Outlet,Switch, Route,Routes,RouterProvider } from "react-router-dom";
import { positions, Provider } from 'react-alert';
import HomeIndex from "./pages/Home/index";
import AboutIndex from "./pages/About/index";
import AlertTemplate from 'react-alert-template-basic';

import ContentIndex from "./pages/Contact/index";

//Auth
import LoginIndex from "./pages/Auth/Login/index";
import RegisterIndex from "./pages/Auth/Register/index";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <HomeIndex></HomeIndex>
    ),
  },
  {
    path: '/about-us',
    element: (
        <AboutIndex></AboutIndex>
    ),
 
  },
  {
    path: '/contact-us',
    element: (
        <ContentIndex></ContentIndex>
    ),
 
  },
  {
    path: '/login',
    element: (
        <LoginIndex></LoginIndex>
    ),
 
  },
  {
    path: '/register',
    element: (
        <RegisterIndex></RegisterIndex>
    ),
 
  },
])

function App() {
  return (
    <div className="App">
        {(
          <Provider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
          </Provider>
        )}
        {/* Link must be inside the Provider */}
    </div>
  );
}


export default App;