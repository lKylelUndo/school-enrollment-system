import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type ProgramTypes = {
  id: number;
  degreeName: string;
  degreeDescription: string;
  degreeDepartment: string;
  createdAt: string;
  updatedAt: string;
};

function AllProgram() {
  const [allPrograms, setPrograms] = useState<ProgramTypes[]>([]);

  async function fetchAllPrograms() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/view-all-programs",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      setPrograms(responseData.allDegreePrograms);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllPrograms();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/delete-a-program/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        fetchAllPrograms();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-gray-50 min-h-screen !w-[1000px] !mx-auto !p-4">
      <h1 className="text-2xl font-semibold mb-6">All Degree Programs</h1>

      {allPrograms.length === 0 ? (
        <p className="text-gray-500">No degree programs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg !p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {program.degreeName}
              </h2>
              <p className="text-sm text-gray-700 mb-1">
                {program.degreeDescription}
              </p>
              <p className="text-xs text-gray-500">
                Department: {program.degreeDepartment}
              </p>
              <Button
                variant={"destructive"}
                onClick={() => handleDelete(program.id)}
                className="!p-4 !mt-2"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProgram;
