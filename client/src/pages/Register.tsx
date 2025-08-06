import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="lg:w-2/3 !mx-auto h-lvh">
      <div className="lg:w-[500px] w-full !mx-auto !mt-14 lg:!p-0 !p-6">
        <h1 className="text-slate-900 text-3xl font-bold">Sign in</h1>
        <form className="!mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 !mt-4">
              <label htmlFor="firstName" className="text-slate-800 font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ex. Kyle"
                className="border !p-2 rounded-md"
              />
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
                placeholder="Ex. Inoc"
                className="border !p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 !mt-4">
              <label htmlFor="lastName" className="text-slate-800 font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Ex. Ando"
                className="border !p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 !mt-4">
              <label htmlFor="email" className="text-slate-800 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border !p-2 rounded-md"
              />
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
              placeholder="Password"
              className="border !p-2 rounded-md"
            />
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
              placeholder="Confirm Password"
              className="border !p-2 rounded-md"
            />
          </div>

          <div className="!mt-6">
            <Button className="w-full">Register</Button>
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
