import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Posts from './pages/Posts';
import ProtectedRoute from './components/ProtectedRoute';
import Games from './pages/Games';
import Dashboard from './pages/Dashboard';
import Premium from './pages/Premium';
import About from './pages/About';
import Profile from './pages/Profile'
import { Auth0Provider } from '@auth0/auth0-react';
import UserManagement from './components/UserManagement';
import WelcomePage from './pages/WelcomePage';
import MyProfile from './pages/MyProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"posts",
        element:<Posts/>
      },
      {
        path:"games",
        element:<Games/>
      },
      {
        path:"about",
        element:<About/>      
      },
      {
        path: "dashboard",
        element:
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
      },
      {
        path:"premium",
        element:<Premium/>
      },
      {
        path: "users",
        element:
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
      },
      {
        path: "profile",
        element: <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      },
      {
        path: "myprofile",
        element:
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
      },
      {
        path: "welcome",
        element:
          <ProtectedRoute>
            <WelcomePage />
          </ProtectedRoute>
      },
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pwiaoo6hu4v7k8jh.us.auth0.com"
      clientId="iWtzOOqmafMigfwYmND7snSGrQ99teg0"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    
       
      <RouterProvider router={router} />
      
    </Auth0Provider>
  </React.StrictMode>
);