import { createBrowserRouter, RouterProvider } from "react-router";
import PageLayout from "./components/page-layout";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homepage";
import Productspage from "./pages/products-page";
import Poductdetailspage from "./pages/poduct-details-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products/:id", element: <Productspage /> },
        { path: "product/:id", element: <Poductdetailspage /> },
        // { path: "register", element: <SignUpPage /> },
        // { path: "otp-verification", element: <OtpVerificationPage /> },
        // { path: "forgot-password", element: <ForgotPassword /> },
        // { path: "tracks", element: <TracksPage /> },
        // { path: "track/:id", element: <TrackDetailsPage /> },

        // {
        //   path: "/",
        //   element: <Protectedlayout />,
        //   children: [
        //     { path: "checkout", element: <CheckoutPage /> },
        //     { path: "dashboard", element: <Dashbord /> },
        //   ],
        // },
        // { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
