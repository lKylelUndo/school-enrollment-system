import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]" />

        <div className="w-2/3 container !mx-auto flex justify-between">
          <div className="flex items-center gap-x-2">
            <img className="w-12 h-auto" src="./mortarboard.png" alt="" />
            <h1 className="text-2xl font-extrabold">
              Edu<span className="text-green-700">kado</span>
            </h1>
          </div>

          <div className=" !p-3">
            <NavLink to={"/"}>Home</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
