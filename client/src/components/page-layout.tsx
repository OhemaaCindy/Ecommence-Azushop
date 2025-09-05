import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div className="bg-red-500">
      P
      <Outlet />
    </div>
  );
};

export default PageLayout;
