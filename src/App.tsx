import './App.css';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Layout from "@/components/Layout.tsx";
import Main from "@/templates/main";
import Gallery from "@/templates/gallery";
import ErrorPage from "@/templates/error";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader() {
            // Our root route always provides the user, if logged in
            return {user: ""};
        },
        errorElement: <ErrorPage/>,
        Component: Layout,
        children: [
            {
                index: true,
                Component: Main,
            },
            {
                path: "gallery",
                // action: loginAction,
                Component: Gallery,
                children: [
                    {
                        path: ":id",
                        // loader: todoLoader,
                        Component: Gallery,
                    }
                ]
            },
            {
                path: "absenceRequest",
                // action: loginAction,
                Component: Main,
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
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>}/>
    );
}

export default App;