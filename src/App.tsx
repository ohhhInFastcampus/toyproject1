import "./App.css";
import Layout from "@/components/Layout.tsx";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Main from "@/templates/main";
import GalleryPage from "@/containers/gallery";
import ErrorPage from "@/templates/error";
import GalleryDetailPage from "@/containers/galleryDetail";
import AbsenceRequestDetailsContainer from "./templates/absenceRequestDetails";
import Login from "@/templates/login";
import {PrivateRoute} from "@/route/PrivateRoute.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        Component: PrivateRoute,
        children: [
            {
                index: true,
                Component: Main,
            },
            {
                path: "gallery",
                // action: loginAction,
                Component: GalleryPage,
                // children: [
                //     {
                //         path: "/:id",
                //         // loader: todoLoader,
                //         Component: GalleryDetail,
                //     }
                // ]
            },
            {
                path: "gallery/:galleryId",
                Component : GalleryDetailPage
            },
            {
                path: "absenceRequest",
                // action: loginAction,
                Component: Main,
            },
            {
              path: "absenceRequestDetails",
              // action: loginAction,
              Component: AbsenceRequestDetailsContainer,
            },
        ],
    },
    {
        path: "login",
        // action: loginAction,
        Component: Login,
    },
    {
        path: "/logout",
        async action() {
            //TODO cookie delete
            return redirect("/login");
        },
    },
]);

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </>
  );
}

export default App;
