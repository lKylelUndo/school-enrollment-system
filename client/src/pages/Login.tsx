import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import type { loginTypes } from "@/types/login";
import { AlertCircleIcon } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState<loginTypes>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        const errorsObj: Record<string, string> = {};
        responseData.errors.forEach((error: any) => {
          errorsObj[error.path] = error.msg;
        });

        console.log(errorsObj);
        setErrors(errorsObj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:w-2/3 !mx-auto h-lvh">
      <div className="lg:w-[500px] w-full !mx-auto !mt-25 lg:!p-0 !p-6">
        <h1 className="text-slate-900 text-3xl font-bold">Welcome back</h1>
        <form onSubmit={handleLogin} className="!mt-10">
          <div className="flex flex-col gap-2 !mt-4">
            <label htmlFor="email" className="text-slate-800 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`border !p-2 rounded-md ${
                errors.email && "border-red-400"
              }`}
            />
            {errors.email && (
              <Alert variant={"destructive"}>
                <AlertCircleIcon />
                <AlertDescription>{errors.email}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex flex-col gap-2 !mt-4">
            <label htmlFor="password" className="text-slate-800 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`border !p-2 rounded-md ${
                errors.email && "border-red-400"
              }`}
            />

            {errors.password && (
              <Alert variant={"destructive"}>
                <AlertCircleIcon />
                <AlertDescription>{errors.password}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="!mt-6">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>

        <div className="text-center !mt-6">
          <h1 className="text-slate-500">
            Dont have an account?{" "}
            <span className="text-slate-800 font-medium">
              <NavLink to={"/register"}>Sign up for free</NavLink>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
