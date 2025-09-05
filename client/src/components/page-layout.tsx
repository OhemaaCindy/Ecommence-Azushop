import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-500">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="mt-auto bg-amber-800">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
