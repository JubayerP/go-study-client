import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetail from "../../pages/CourseDetail/CourseDetail";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://assignment-10-server-wine.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetail />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-wine.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-wine.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/faq',
        element: <FAQ />
      }
    ],
  },
]);
