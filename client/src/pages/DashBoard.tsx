import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthProvider";
import { Link } from "react-router-dom";

function DashBoard() {
  const [totalStudents, setTotalStudents] = useState();
  const { auth } = useAuthContext();

  // useEffect(()=>{
  //   async function fetchTotalStudents
  // },[])

  const stats = {
    totalStudents: 1200,
    totalPrograms: 15,
    pendingEnrollments: 24,
  };

  return (
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
