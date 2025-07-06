import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { AuthProvider } from "./store/context/AuthProvider.tsx";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import DirectionPage from "./pages/DirectionPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import TipsPage from "./pages/TipPage.tsx";
import InformationDetailPage from "./pages/InformationDetailPage.tsx";
import Register from "./features/authentication/Register.tsx";
import Login from "./features/authentication/Login.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ProtectedProfile from "./features/authentication/ProtectedProfile.tsx";
import ProductionPage from "./pages/ProductionPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import CartPage from "./pages/CartPage.tsx";

export const PageLayout = () => {
  return (
    <AuthProvider>
      <div className="flex justify-start flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/direction",
        element: <DirectionPage />,
      },
      {
        path: "/tip",
        element: <TipsPage />,
      },
      {
        path: "/product",
        element: <ProductionPage />,
      },
      {
        path: "/product-detail",
        element: <ProductDetailPage />,
      },
      { path: "/information", element: <InformationDetailPage /> },
      { path: "/signup", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        element: <ProtectedProfile />,
        children: [{ path: "/profile", element: <ProfilePage /> }],
      },
      {
        element: <ProtectedProfile />,
        children: [{ path: "/cart", element: <CartPage /> }],
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
