import { Link, NavLink } from "react-router-dom";
import logo from '/tasks.png'
import useAuth from "../../Hooks/useAuth";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
const {logoutUser} = useAuth()
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};

const handleLogout = () => {
    logoutUser().then(() => console.log('logout'))
}



    const navLinks = <>
    <li><NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "text-lg"
                    }>
                    Home
        </NavLink>
    </li>
    <li><NavLink to={'/features'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "text-lg"
                    }>
                    Features
        </NavLink>
    </li>
    <li><NavLink to={'/about'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "text-lg"
                    }>
                    About
        </NavLink>
    </li>
    <li><NavLink to={'/contact'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "text-lg"
                    }>
                    Contact
        </NavLink>
    </li>
    <li><Link to={'/register'}>Register</Link></li>
    <li><Link to={'/login'}>Log in</Link></li>
    <button onClick={handleLogout} className="bg-green-500 p-2">Log Out</button>
    </>
    return (
        <nav className="flex justify-between items-center p-3 relative">
            <div>
                <img className="w-12 md:w-14 lg:w-16" src={logo} alt="" />
            </div>
            <div className="flex items-center md:hidden">
                {showMenu ? (
                    <HiX className="text-3xl text-gray-600 cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <HiMenuAlt3 className="text-3xl text-gray-600 cursor-pointer" onClick={toggleMenu} />
                )}
            </div>
            <ul className="hidden sm:flex justify-center items-center md:gap-8 lg:gap-14">
                {navLinks}
            </ul>
            {/* mobile menu  */}
            <ul className={` ${showMenu? "block  text-white space-y-2 absolute p-5 rounded-md z-50 top-16 right-2 bg-blue-600 justify-center items-center md:gap-8 lg:gap-14" : "hidden " } `}>
                {navLinks}
            </ul>

        </nav>
    );
};

export default Navbar;