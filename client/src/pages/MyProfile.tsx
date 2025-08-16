import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthProvider";
import React, { useState } from "react";

function MyProfile() {
  const { auth } = useAuthContext();
  const [formData, setFormData] = useState({
    userId: auth?.userId,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await fetch(
        "http://localhost:5000/api/change-password",
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        throw new Error("Error connecting");
      }

      setFormData({
        userId: auth?.userId,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container text-white !mx-auto  grid md:grid-cols-3 gap-4 !mt-10">
        <div className="bg-slate-800 rounded !p-4">
          <h1 className="underline">First Name</h1>
          <p>{auth?.firstName}</p>
        </div>

        <div className="bg-slate-800 rounded !p-4">
          <h1 className="underline">Middle Name</h1>
          <p>{auth?.middleName}</p>
        </div>

        <div className="bg-slate-800 rounded !p-4">
          <h1 className="underline">Last Name</h1>
          <p>{auth?.lastName}</p>
        </div>
      </div>

      <div className="bg-slate-800 text-white !p-4 rounded w-96 !ms-10 !mt-10">
        <h1>Change Password</h1>
        <hr />
        <form onSubmit={handleChangePassword} className="!mt-4">
          <div className="flex flex-col">
            <label htmlFor="current-password">Current Password</label>
            <input
              className="border rounded border-gray-700 text-sm !p-2"
              onChange={handleChange}
              value={formData.currentPassword}
              type="text"
              name="currentPassword"
              id="current-password"
            />
          </div>

          <div className="flex flex-col !my-4">
            <label htmlFor="new-password">New Password</label>
            <input
              className="border rounded border-gray-700 text-sm !p-2"
              onChange={handleChange}
              value={formData.newPassword}
              type="text"
              name="newPassword"
              id="new-password"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              className="border rounded border-gray-700 text-sm !p-2"
              onChange={handleChange}
              value={formData.confirmPassword}
              type="text"
              name="confirmPassword"
              id="confirm-password"
            />
          </div>

          <Button variant={"secondary"} className="!mt-4 w-full">
            Update
          </Button>
        </form>
      </div>
    </>
  );
}

export default MyProfile;
