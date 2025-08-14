import { useAuthContext } from "@/context/AuthProvider";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PublicRoutes() {
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (auth.isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/homepage");
      }
    }
  }, [auth]);

  return !auth.isAuthenticated ? <Outlet /> : null;
}

export default PublicRoutes;
