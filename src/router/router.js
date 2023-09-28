import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CommonLayout from "../layout/CommonLayout";
import DetailPageMain from "../pages/DetailPageMain";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:":bookId",
                element: <DetailPageMain />
            }
        ]

    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}