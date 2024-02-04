import './App.css';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import GalleryPage from "@/containers/gallery";
import ErrorPage from "@/templates/error";
import GalleryDetailPage from "@/containers/galleryDetail";
import {PrivateRoute} from "@/route/PrivateRoute.tsx";
import MainPage from "@/containers/main";
import AbsenceRequestDetailsContainer from "@/containers/absenceRequestDetails";
import AbsenceRequestPage from "@/containers/absenceRequest";
import LoginPage from "@/containers/login";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    Component: PrivateRoute,
    children: [
      {
        index: true,
        Component: MainPage,
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
        Component: AbsenceRequestPage,
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
    Component: LoginPage,
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
      <><RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} /></>
  );
}

export default App;