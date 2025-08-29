import React, { useState } from "react";

function CreateProgram() {
  const [formData, setFormData] = useState({
    degreeName: "",
    degreeDescription: "",
    degreeDepartment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "http://localhost:5000/api/add-new-program",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        setFormData({
          degreeName: "",
          degreeDescription: "",
          degreeDepartment: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="!w-[1000px]">
      <div className="!w-[500px] !mx-auto !mt-20 !p-5 flex flex-col gap-y-5">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Create Program
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label
              htmlFor="degreeName"
              className="block text-sm font-medium text-gray-700"
            >
              Degree Name
            </label>
            <input
              type="text"
              name="degreeName"
              id="degreeName"
              value={formData.degreeName}
              onChange={handleChange}
              className="mt-1 block w-full !p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="e.g. B.Sc Computer Science"
              required
            />
          </div>

          <div>
            <label
              htmlFor="degreeDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Degree Description
            </label>
            <textarea
              name="degreeDescription"
              id="degreeDescription"
              value={formData.degreeDescription}
              onChange={handleChange}
              className="mt-1 block w-full !p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Brief overview of the program"
              required
            />
          </div>

          <div>
            <label
              htmlFor="degreeDepartment"
              className="block text-sm font-medium text-gray-700"
            >
              Degree Department
            </label>
            <input
              type="text"
              name="degreeDepartment"
              id="degreeDepartment"
              value={formData.degreeDepartment}
              onChange={handleChange}
              className="mt-1 block w-full !p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="e.g. Department of Engineering"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 !p-2 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Create Program
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProgram;
