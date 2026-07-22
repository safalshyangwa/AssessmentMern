import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-600 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Safal</h1>

        <div className="flex gap-6">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>

          <NavLink to="/about" className="hover:text-gray-200">
            About
          </NavLink>

          <NavLink to="/contact" className="hover:text-gray-200">
            Contact
          </NavLink>
<button>
  <NavLink to="/login" className="hover:text-gray-200">
            Login
          </NavLink>
</button>
        

        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;