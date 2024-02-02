import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Layout from "@/components/Layout.tsx";
import Main from "@/templates/main";
import GalleryPage from "@/containers/gallery";
import ErrorPage from "@/templates/error";
import GalleryDetailPage from "@/containers/galleryDetail";
import AbsenceRequestDetailsContainer from "./templates/absenceRequestDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Layout,
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
        Component: GalleryDetailPage,
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
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </>
  );
}

export default App;
