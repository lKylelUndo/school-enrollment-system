import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]" />

        <div className="lg:w-2/3 w-full container !mx-auto flex justify-between">
          <div className="flex items-center gap-x-2">
            <img className="w-12 h-auto" src="./mortarboard.png" alt="" />
            <h1 className="text-2xl font-extrabold">
              <NavLink to={"/"}>
                Edu<span className="text-green-700">kado</span>
              </NavLink>
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
