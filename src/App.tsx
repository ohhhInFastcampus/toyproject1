import './App.css';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Layout from "@/components/Layout.tsx";
import Main from "@/templates/main";
import Gallery from "@/templates/gallery";
import ErrorPage from "@/templates/error";
import GalleryDetail from "@/templates/galleryDetail";
import AbsenceRequest from "@/templates/absenceRequest";
import Login from "@/templates/login"

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        Component: Layout,
        children: [
            {
                index: true,
                Component: AbsenceRequest,
            },
            {
                path: "gallery",
                // action: loginAction,
                Component: Gallery,
                // children: [
                //     {
                //         path: "/:id",
                //         // loader: todoLoader,
                //         Component: GalleryDetail,
                //     }
                // ]
            },
            {
                path: "gallery/:id",
                Component : GalleryDetail
            },
            {
                path: "absenceRequest",
                // action: loginAction,
                Component: AbsenceRequest,
            },
            {
                path: "absenceRequestDetails",
                // action: loginAction,
                Component: Main,
            },
        ],
    },
    {
        path: "login",
        // action: loginAction,
        Component: Main,
    },
    {
        path: "/logout",
        async action() {
            //TODO cookie delete
            return redirect("/");
        },
    },
]);

function App() {
    return (
        <><RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} /></>
    );
}

export default App;