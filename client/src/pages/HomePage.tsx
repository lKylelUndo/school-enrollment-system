import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="!mt-15 md:w-2/3 !p-4 !mx-auto">
      <h1 className="text-3xl !mb-4">Welcome User!</h1>
      <NavLink to={"/undergraduate-programs"}>
        <Button variant={"default"} className="!px-2 !py-6">View All Undergraduate Programs</Button>
      </NavLink>
    </div>
  );
}

export default HomePage;
