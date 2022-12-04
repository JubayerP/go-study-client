import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetail from "../../pages/CourseDetail/CourseDetail";
import Courses from "../../pages/Courses/Courses";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetail />,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
            }
        ]
    }
])