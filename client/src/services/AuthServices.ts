import type { RegisterFormDataTypes } from "@/types/register";

type LoginTypes = {
  email: string;
  password: string;
};

export const callLogin = async (formData: LoginTypes) => {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    return { response, responseData };
  } catch (error) {
    console.log(error);
  }
};

export const callRegister = async (formData: RegisterFormDataTypes) => {
  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    return { response, responseData };
  } catch (error) {
    console.log(error);
  }
};
