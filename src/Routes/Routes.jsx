import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import AppDetails from "../pages/AppDetails";

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
                loader: () => fetch('/apps_data.json'),
                Component: Apps,
            },
            {
              path: 'appDetails/:id',
              loader: () => fetch('/apps_data.json'),
              Component: AppDetails,  
            },
            {
                path: 'installation',
                loader: () => fetch('/apps_data.json'),
                Component: Installation,
            }
        ]
    }
])