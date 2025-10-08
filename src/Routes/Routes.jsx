import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: () => fetch('/apps_data.json'),
                Component: Home,
            },
            {
                path: 'apps',
                
                Component: Apps,
            },
            {
                path: 'installation',
                Component: Installation,
            }
        ]
    }
])