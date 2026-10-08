import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import App from './App.jsx'
import { LoginPage } from './Login.jsx'
import { RegisterPage } from './Register.jsx'
import { HomePage, SeriesPage, MoviesPage, MyList } from './Home-Page.jsx'
import { ErrorPage } from './ErrorPage.jsx'

import {createBrowserRouter} from 'react-router'
import {RouterProvider} from 'react-router/dom'

import ProtectedRoute from './ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [ 
      {
        index: true,
        Component: App
      },
      // PUBLIC ROUTES
      {
        path: "register",
        Component: RegisterPage
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "*",
        Component: ErrorPage
      },
      // PROTECTED ROUTES
      {
        Component: ProtectedRoute,
        children: [
            {
              path: "home",
              Component: HomePage
            },
            {
              path: "series",
              Component: SeriesPage
            },
            {
              path: "movies",
              Component: MoviesPage
            },
            {
              path: "mylist",
              Component: MyList
            },
        ]}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)