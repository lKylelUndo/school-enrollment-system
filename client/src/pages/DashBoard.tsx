import React from "react";
import { useAuthContext } from "@/context/AuthProvider";
import { Link } from "react-router-dom";

function DashBoard() {
  const { auth } = useAuthContext();

  const stats = {
    totalStudents: 1200,
    totalPrograms: 15,
    pendingEnrollments: 24,
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
        <nav className="space-y-3 text-sm">
          <SidebarLink to="/create-program" label="➕ Create Program" />
          <SidebarLink
            to="/pending-enrollments"
            label="⏳ Pending Enrollments"
          />
          <SidebarLink to="/all-programs" label="📚 View All Programs" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-10">
        <h1 className="text-2xl font-semibold mb-10">
          Welcome back, {auth?.firstName || "Admin"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <StatCard
            title="Enrolled Students"
            value={stats.totalStudents}
            color="text-blue-600"
          />
          <StatCard
            title="Total Programs"
            value={stats.totalPrograms}
            color="text-green-600"
          />
          <StatCard
            title="Pending Enrollments"
            value={stats.pendingEnrollments}
            color="text-yellow-600"
          />
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 rounded-md transition-colors hover:bg-gray-100 text-gray-700"
    >
      {label}
    </Link>
  );
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow transition">
      <h2 className="text-sm font-medium text-gray-500 mb-1">{title}</h2>
      <p className={`text-3xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}

export default DashBoard;
