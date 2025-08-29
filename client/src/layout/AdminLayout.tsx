import SideBarLink from "@/components/SideBarLink";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <aside className="w-64 bg-slate-50 border-r !px-2 border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
        <nav className="space-y-3 text-sm">
          <SideBarLink to="/dashboard" label="Dashboard" />

          <SideBarLink to="/create-program" label="➕ Create Program" />
          <SideBarLink
            to="/pending-enrollments"
            label="⏳ Pending Enrollments"
          />
          <SideBarLink to="/all-programs" label="📚 View All Programs" />
        </nav>
      </aside>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
