import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 border-b-1">
        <ul className="flex justify-end items-center">
          <li className="space-x-4 font-bold">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/owner" className="hover:text-gray-400">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
