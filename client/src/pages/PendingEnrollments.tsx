import { useEffect, useState } from "react";

type EnrolleeTypes = {
  id: number;
  studentName: string;
  enrolledAt: string;
  isEnrolled: boolean;
};

function PendingEnrollments() {
  const [enrollees, setEnrollees] = useState<EnrolleeTypes[]>([]);

  useEffect(() => {
    async function fetchALLEnrollees() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/get-all-enrolled",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const responseData = await response.json();
        console.log(responseData);
        setEnrollees(responseData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchALLEnrollees();
  }, []);

  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-semibold mb-6">Pending Enrollments</h1>

      {enrollees.length === 0 ? (
        <p className="text-gray-500">No enrollments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                <th className="px-5 py-3 border-b">ID</th>
                <th className="px-5 py-3 border-b">Student Name</th>
                <th className="px-5 py-3 border-b">Program</th>
                <th className="px-5 py-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrollees.map((enrollee) => (
                <tr
                  key={enrollee.id}
                  className="hover:bg-gray-50 transition text-sm"
                >
                  <td className="px-5 py-3 border-b">{enrollee.id}</td>
                  <td className="px-5 py-3 border-b">{enrollee.studentName}</td>
                  <td className="px-5 py-3 border-b">{enrollee.enrolledAt}</td>
                  <td className="px-5 py-3 border-b">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        enrollee.isEnrolled
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {enrollee.isEnrolled ? "Enrolled" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PendingEnrollments;
