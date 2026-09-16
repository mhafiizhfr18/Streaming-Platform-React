import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import App from './App.jsx'
import { LoginPage } from './Login.jsx'
import { RegisterPage } from './Register.jsx'
import { HomePage } from './Home-Page.jsx'
import { SeriesPage } from './Home-Page.jsx'
import { MoviesPage } from './Home-Page.jsx'
import { MyList } from './Home-Page.jsx'

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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)