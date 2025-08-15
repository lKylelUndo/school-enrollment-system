import { useAuthContext } from "@/context/AuthProvider";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PublicRoutes() {
  const { auth, loading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(auth.isAdmin ? "/dashboard" : "/homepage");
    }
  }, [auth]);

  // if (loading) return null;

  return !auth.isAuthenticated ? <Outlet /> : null;
}

export default PublicRoutes;
