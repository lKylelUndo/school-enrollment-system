import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthProvider";
import React, { useEffect, useState } from "react";

function EnrollmentStatus() {
  const { auth } = useAuthContext();
  const [currentUser, setCurrentUser] = useState({
    studentName: "",
    isEnrolled: false,
    enrolledAt: "",
  });

  useEffect(() => {
    async function fetchEnrollmentStatus() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/get-enrollment-status/${auth?.userId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const responseData = await response.json();
        setCurrentUser({
          studentName: responseData.studentName,
          isEnrolled: responseData.isEnrolled,
          enrolledAt: responseData.enrolledAt,
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchEnrollmentStatus();
  }, [auth]);

  const handleUnenroll = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/unenroll-a-degree/${auth?.userId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      await response.json();

      setCurrentUser({
        studentName: "",
        isEnrolled: false,
        enrolledAt: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="!p-15 w-3/4 !mx-auto h-100">
      {currentUser.isEnrolled ? (
        <div className="flex flex-col gap-y-2">
          <h1>{currentUser.studentName}</h1>
          <h1>{currentUser.enrolledAt}</h1>
          <div>
            <Button variant={"default"} onClick={handleUnenroll} className="!px-4">
              Unenroll
            </Button>
          </div>
        </div>
      ) : (
        <p>Currently not enrolled</p>
      )}
    </div>
  );
}

export default EnrollmentStatus;
