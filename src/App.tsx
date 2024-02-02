import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Layout from "@/components/Layout.tsx";
import MainPage from "@/containers/main";
import GalleryPage from "@/containers/gallery";
import MainPage from "@/containers/main";
import ErrorPage from "@/templates/error";
import GalleryDetailPage from "@/containers/galleryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Layout,
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
    Component: MainPage,
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
