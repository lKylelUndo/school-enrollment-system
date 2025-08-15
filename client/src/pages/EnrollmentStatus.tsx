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
        console.log(responseData);

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
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Current enrolled in: {currentUser.enrolledAt}</h1>

      <Button variant={"default"} className="!w-20" onClick={handleUnenroll}>Unenroll</Button>
    </div>
  );
}

export default EnrollmentStatus;
