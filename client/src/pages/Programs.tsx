import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CardProgram from "@/components/CardProgram";

type ProgramTypes = {
  id: number;
  degreeName: string;
  degreeDescription: string;
  degreeDepartment: string;
  createdAt: string;
  updatedAt: string;
};

function Programs() {
  const [allPrograms, setPrograms] = useState<ProgramTypes[]>([]);
  const [selectedDepartment, setSelectedDepartment] =
    useState("Computer Studies");

  useEffect(() => {
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

        setPrograms(responseData.allDegreePrograms);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPrograms();
  }, []);

  const filteredPrograms = allPrograms.filter(
    (program) => program.degreeDepartment === selectedDepartment
  );

  return (
    <>
      <div className="bg-slate-900 h-[250px]">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-gray-50 text-4xl font-semibold">Our Courses</h1>
        </div>
      </div>

      <div className="md:w-2/3  !mx-auto text-center !-mt-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="!px-4 text-gray-50 !py-2 bg-green-700 rounded-lg">
            Programs
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!p-4 w-80 flex flex-col gap-4">
            <DropdownMenuItem
              onClick={() => setSelectedDepartment("Education")}
            >
              Education
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedDepartment("Engineering")}
            >
              Engineering
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedDepartment("Computer Studies")}
            >
              Computer Studies
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <hr className="!mt-4 bg-slate-200 h-px" />
      </div>

      <div className="md:w-[1100px] !mt-10 !mx-auto grid lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program, index) => (
          <CardProgram key={index} program={program} />
        ))}
      </div>
    </>
  );
}

export default Programs;
