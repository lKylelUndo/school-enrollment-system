import { Button } from "@/components/ui/button";
import { School } from "lucide-react";
import { NavLink } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="bg-[url('/backgroundHome.jpg')] bg-no-repeat bg-cover bg-center h-[830px]">
      <div className="w-[900px] !mx-auto text-5xl !pt-25 font-bold">
        <div className="flex gap-x-2">
          <span>
            <School />
          </span>
          <h1 className="underline !text-xl !mb-3 !font-semibold text-green-950">
            WELCOME TO EDUKADO
          </h1>
        </div>
        <h1>Start Your Beautiful</h1>
        <h1 className="!mt-3">
          And <span className="text-green-700">Bright</span> Future
        </h1>
        <div className="flex gap-x-3 !mt-10">
          <Button className="!px-4 !py-3">View More</Button>
          <Button variant={"outline"}  className="!px-4 !py-3">
            <NavLink to={'/login'}>Enroll Now</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
