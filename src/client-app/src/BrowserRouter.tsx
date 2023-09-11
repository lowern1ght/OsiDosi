import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import {LoginPage} from "./pages/LoginPage";

const title: string = "Osi-Dosi"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <></>,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <LoginPage title={title}/>
    },
])