import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

import { Provider } from "react-redux";
import { store } from "./store/redux/store";

import App from "./App.jsx";
import LoginPage from "./pages/Login-Page.jsx";
import RegisterPage from "./pages/Register.jsx";
import HomePage from "./pages/Home-Page.jsx";
import MoviesPage from "./pages/Movies-Page.jsx";
import SeriesPage from "./pages/Series-Page.jsx";
import MyList from "./pages/MovieList-Page.jsx";
import ProfilePage from "./pages/Profile-Page.jsx";
import ErrorPage from "./pages/Error-Page.jsx";
import SubscribePage from "./pages/Subscribe-Page.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        Component: App,
      },
      // PUBLIC ROUTES
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      // PROTECTED ROUTES
      {
        Component: ProtectedRoute,
        children: [
          {
            path: "home",
            Component: HomePage,
          },
          {
            path: "series",
            Component: SeriesPage,
          },
          {
            path: "movies",
            Component: MoviesPage,
          },
          {
            path: "mylist",
            Component: MyList,
          },
          {
            path: "profile",
            Component: ProfilePage,
          },
          {
            path: "subscribe",
            Component: SubscribePage,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
