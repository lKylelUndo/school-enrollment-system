import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Outlet />
    </>
  );
}

export default MainLayout;
