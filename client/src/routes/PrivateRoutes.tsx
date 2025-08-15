import { useAuthContext } from "@/context/AuthProvider";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function PrivateRoutes() {
  const { auth, loading } = useAuthContext();
  console.log("auth", auth);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const adminRoutes = ["/dashboard"];
  const userRoutes = [
    "/homepage",
    "/undergraduate-programs",
    "/enrollment-status",
  ];

  useEffect(() => {
    if (loading) return;

    if (!auth?.isAuthenticated) {
      console.log("unauth");
      navigate("/login");
    } else {
      if (auth.isAdmin && !adminRoutes.includes(path)) {
        navigate("/dashboard");
      } else if (!auth.isAdmin && !userRoutes.includes(path)) {
        navigate("/homepage");
      }
    }
  }, [auth, path, navigate]);

  return auth?.isAuthenticated ? <Outlet /> : null;
}

export default PrivateRoutes;
