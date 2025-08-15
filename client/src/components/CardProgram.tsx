import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useAuthContext } from "@/context/AuthProvider";
import { useEffect } from "react";

type ProgramCardTypes = {
  program: {
    id: number;
    degreeName: string;
    degreeDescription: string;
    degreeDepartment: string;
    createdAt: string;
    updatedAt: string;
  };
};

function CardProgram({ program }: ProgramCardTypes) {
  const { auth } = useAuthContext();

  useEffect(() => {
    console.log(auth);
  }, []);

  const handleEnroll = async (program: ProgramCardTypes["program"]) => {
    try {
      console.log(program);
      const studentName = auth?.firstName.concat(
        " ",
        auth.middleName,
        " ",
        auth.lastName
      );

      const studentData = {
        userId: auth?.userId,
        studentName,
        enrolledAt: program.degreeName,
      };

      const response = await fetch(
        "http://localhost:5000/api/enroll-a-degree",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(studentData),
        }
      );

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="!p-6">
      <CardHeader>
        <CardTitle>{program.degreeName}</CardTitle>
        <CardDescription>{program.degreeDescription}</CardDescription>
      </CardHeader>
      <Button
        variant={"default"}
        className="!w-20"
        onClick={() => handleEnroll(program)}
      >
        Enroll
      </Button>
    </Card>
  );
}

export default CardProgram;
