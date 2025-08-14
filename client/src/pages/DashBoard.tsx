import { useAuthContext } from "@/context/AuthProvider";
import React from "react";

function DashBoard() {
  const { auth } = useAuthContext();
  console.log("auth", auth);
  return <div>DashBoard</div>;
}

export default DashBoard;
