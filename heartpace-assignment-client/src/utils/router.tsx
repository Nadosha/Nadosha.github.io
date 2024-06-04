import React from "react";
import {createBrowserRouter} from "react-router-dom";
import ErrorBoundary from "@Components/ErrorBoundary/ErrorBoundary";
import { NotFound } from "@Components/UI/404";
import BaseLayout from "@Components/Layouts/BaseLayout";
import DashboardContainer from "@Features/Dashboard/Dashboard.container";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                id: "home",
                path: "/",
                element: <DashboardContainer/>,
            }
        ],
    },
    {
        path: "*",
        element: <ErrorBoundary children={<NotFound/>}/>,
    }
]);

export default router;