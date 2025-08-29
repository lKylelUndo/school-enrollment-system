import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Programs from "./pages/Programs";
import PrivateRoutes from "./routes/PrivateRoutes";
import DashBoard from "./pages/DashBoard";
import PublicRoutes from "./routes/PublicRoutes";
import EnrollmentStatus from "./pages/EnrollmentStatus";
import MyProfile from "./pages/MyProfile";
import PendingEnrollments from "./pages/PendingEnrollments";
import CreateProgram from "./pages/CreateProgram";
import AllProgram from "./pages/AllProgram";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            {/* User's Route */}
            <Route path="homepage" element={<HomePage />} />
            <Route path="undergraduate-programs" element={<Programs />} />
            <Route path="enrollment-status" element={<EnrollmentStatus />} />
            <Route path="my-profile" element={<MyProfile />} />

            {/* Admin Route */}
            <Route element={<AdminLayout />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route
                path="pending-enrollments"
                element={<PendingEnrollments />}
              />
              <Route path="create-program" element={<CreateProgram />} />
              <Route path="all-programs" element={<AllProgram />} />
            </Route>
          </Route>

          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
