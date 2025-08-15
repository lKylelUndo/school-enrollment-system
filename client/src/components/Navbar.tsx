import { NavLink, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useAuthContext } from "@/context/AuthProvider";

function Navbar() {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include",
      });

      const responseData = await response.json();

      console.log(responseData);
      if (response.ok) {
        setAuth(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]" />

        <div className="sm:w-2/3 lg:w-[900px] container !mx-auto flex justify-between">
          <div className="flex items-center gap-x-2 w-full lg:w-[900px]">
            <img className="w-12 h-auto" src="./mortarboard.png" alt="" />
            <h1 className="text-2xl font-extrabold">
              <NavLink to={"/"}>
                Edu<span className="text-green-700">kado</span>
              </NavLink>
            </h1>
          </div>

          {auth?.isAuthenticated && !auth?.isAdmin && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <MenuIcon className="!w-30 !h-5 !mt-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-50 flex flex-col gap-2 !px-2 !py-4"
                  align="start"
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>

                     <DropdownMenuItem>
                      <NavLink to={'/enrollment-status'}>Enrollent Status</NavLink>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
