import { Link, NavLink } from "react-router-dom";
import logo from '/tasks.png'
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
const {logoutUser} = useAuth()

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
        <nav className="flex justify-between items-center p-3">
            <div>
                <img className="w-12 md:w-14 lg:w-16" src={logo} alt="" />
            </div>
            <ul className="flex justify-center items-center md:gap-8 lg:gap-14">
                {navLinks}
            </ul>
        </nav>
    );
};

export default Navbar;