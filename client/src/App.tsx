import { createBrowserRouter, RouterProvider } from "react-router";
import PageLayout from "./components/page-layout";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homepage";
import Checkoutpage from "./pages/checkout-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "checkout", element: <Checkoutpage /> },
        // { path: "register", element: <SignUpPage /> },
        // { path: "otp-verification", element: <OtpVerificationPage /> },
        // { path: "forgot-password", element: <ForgotPassword /> },
        // { path: "reset-password/:id", element: <ResetPassword /> },
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
