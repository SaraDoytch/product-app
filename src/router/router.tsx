import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import ProductsList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";
import NotFound from "../components/NotFound"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <ProductsList /> }, 
      { path: "product/:id", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> }, 
    ],
  },
]);

export default router;
