import { Link } from "react-router-dom";

const SideBarLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      className="block !py-1 rounded-md transition-colors hover:bg-gray-100 text-gray-700"
    >
      {label}
    </Link>
  );
};

export default SideBarLink;
