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

            {/* Admin Route */}
            <Route path="dashboard" element={<DashBoard />} />
          </Route>

          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
