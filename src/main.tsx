import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import DirectionPage from "./pages/DirectionPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import TipsPage from "./pages/TipPage.tsx";
import InformationDetailPage from "./pages/InformationDetailPage.tsx";

const Layout = () => (
  <div className="flex justify-start flex-col min-h-screen">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
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
      { path: "/information", element: <InformationDetailPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
