import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/page/Home";
import Member from "../components/page/Member";
import Product from "../components/page/Product";
import Layout from "../components/page/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/member",
        element: <Member />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
