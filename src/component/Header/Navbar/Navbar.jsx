import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Logo></Logo>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-red-500 text-xl underline" : ""}>
                            Home
                        </NavLink>
                        </li> 
                        <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-red-500 text-xl underline" : ""}>
                            Donation
                        </NavLink>
                        </li> 
                        <li>
                        <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-red-500 text-xl underline" : ""}>
                            Statistics
                        </NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;