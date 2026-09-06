import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import App from './App.jsx'
import { LoginPage } from './Login.jsx'
import { RegisterPage } from './Register.jsx'
import { HomePage } from './Home-Page.jsx'

import {createBrowserRouter} from 'react-router'
import {RouterProvider} from 'react-router/dom'

const router = createBrowserRouter([
  {
    path: "/",
    children: [ 
      {
        index: true,
        Component: App
      },
      {
        path: "register",
        Component: RegisterPage
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "homepage",
        Component: HomePage
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)