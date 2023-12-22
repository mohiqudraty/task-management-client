import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineAddTask } from "react-icons/md";



const TopBar = () => {
    return (
        <div className="md:hidden flex ">
            <ul className="space-y-4 max-w-96 mx-auto mt-5 flex bg-blue-600 rounded-sm text-white justify-center items-center gap-5">
        <li><NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                   <IoHomeOutline className="inline w-16" />
        </NavLink>
    </li>
        <li><NavLink to={'/dashboard/task'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                    <MdOutlineAddTask className="inline w-16 mb-3" />
        </NavLink>
    </li>
        <li><NavLink to={'/dashboard/task'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                    <IoAddCircleOutline className="inline w-16 mb-3" />
        </NavLink>
    </li>

          
        </ul>
        </div>
    );
};

export default TopBar;