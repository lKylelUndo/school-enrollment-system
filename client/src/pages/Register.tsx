import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { RegisterFormDataTypes } from "@/types/register";
import { useEffect, useState, type ChangeEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AlertCircleIcon } from "lucide-react";
import { toast } from "sonner";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormDataTypes>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log(formData);

      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        const errorsOjb: Record<string, string> = {};
        responseData.errors.forEach((error: any) => {
          errorsOjb[error.path] = error.msg;
        });

        console.dir(errorsOjb);
        setErrors(errorsOjb);

        return;
      }

      setErrors({});
      toast.success("Registered successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className="lg:w-2/3 !mx-auto h-lvh">
      <div className="lg:w-[500px] w-full !mx-auto !mt-14 lg:!p-0 !p-6">
        <h1 className="text-slate-900 text-3xl font-bold">Sign in</h1>
        <form onSubmit={handleRegister} className="!mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 !mt-4">
              <label htmlFor="firstName" className="text-slate-800 font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ex. Kyle"
                className={`border !p-2 rounded-md ${
                  errors.firstName && "border-red-400"
                } `}
              />
              {errors.firstName && (
                <Alert variant={"destructive"}>
                  <AlertCircleIcon />
                  <AlertDescription>{errors.firstName}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="flex flex-col gap-2 !mt-4">
              <label
                htmlFor="middleName"
                className="text-slate-800 font-medium"
              >
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                id="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Ex. Inoc"
                className={`border !p-2 rounded-md ${
                  errors.middleName && "border-red-400"
                } `}
              />
              {errors.middleName && (
                <Alert variant={"destructive"}>
                  <AlertCircleIcon />
                  <AlertDescription>{errors.middleName}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="flex flex-col gap-2 !mt-4">
              <label htmlFor="lastName" className="text-slate-800 font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ex. Ando"
                className={`border !p-2 rounded-md ${
                  errors.lastName && "border-red-400"
                } `}
              />
              {errors.lastName && (
                <Alert variant={"destructive"}>
                  <AlertCircleIcon />
                  <AlertDescription>{errors.lastName}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="flex flex-col gap-2 !mt-4">
              <label htmlFor="email" className="text-slate-800 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border !p-2 rounded-md ${
                  errors.email && "border-red-400"
                } `}
              />
              {errors.email && (
                <Alert variant={"destructive"}>
                  <AlertCircleIcon />
                  <AlertDescription>{errors.email}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 !mt-4">
            <label htmlFor="password" className="text-slate-800 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`border !p-2 rounded-md ${
                errors.password && "border-red-400"
              } `}
            />
            {errors.password && (
              <Alert variant={"destructive"}>
                <AlertCircleIcon />
                <AlertDescription>{errors.password}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex flex-col gap-2 !mt-4">
            <label
              htmlFor="confirmPassword"
              className="text-slate-800 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`border !p-2 rounded-md ${
                errors.confirmPassword && "border-red-400"
              } `}
            />
            {errors.confirmPassword && (
              <Alert variant={"destructive"}>
                <AlertCircleIcon />
                <AlertDescription>{errors.confirmPassword}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="!mt-6">
            <Button type="submit" className="w-full">Register</Button>
          </div>
        </form>

        <div className="text-center !mt-6">
          <h1 className="text-slate-500">
            Already have an account?{" "}
            <span className="text-slate-800 font-medium">
              <NavLink to={"/login"}>Login</NavLink>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
