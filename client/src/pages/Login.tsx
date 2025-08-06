import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="lg:w-2/3 !mx-auto h-lvh">
      <div className="lg:w-[500px] w-full !mx-auto !mt-25 lg:!p-0 !p-6">
        <h1 className="text-slate-900 text-3xl font-bold">Welcome back</h1>
        <form className="!mt-10">
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

          <div className="flex flex-col gap-2 !mt-4">
            <label htmlFor="password" className="text-slate-800 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border !p-2 rounded-md"
            />
          </div>

          <div className="!mt-6">
            <Button className="w-full">Login</Button>
          </div>
        </form>

        <div className="text-center !mt-6">
            <h1 className="text-slate-500">Dont have an account? <span className="text-slate-800 font-medium"><NavLink to={"/register"}>Sign up for free</NavLink></span></h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
