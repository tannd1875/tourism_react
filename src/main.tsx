import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import DirectionPage from "./pages/DirectionPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import TipsPage from "./pages/TipPage.tsx";
import InformationDetailPage from "./pages/InformationDetailPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex justify-start flex-col min-h-screen">
      <Header />
      <div className="grow">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
