import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import GalleryPage from "@/containers/gallery";
import ErrorPage from "@/templates/error";
import GalleryDetailPage from "@/containers/galleryDetail";
import Login from "@/templates/login";
import { PrivateRoute } from "@/route/PrivateRoute.tsx";
import MainPage from "@/containers/main";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
        Component: GalleryDetailPage,
      },
      {
        path: "absenceRequest",
        // action: loginAction,
        Component: MainPage,
      },
      {
        path: "absenceRequestDetails",
        // action: loginAction,
        Component: MainPage,
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
