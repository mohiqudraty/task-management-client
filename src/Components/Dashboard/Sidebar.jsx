import { Link, NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="md:w-1/4 hidden md:block fixed bottom-0 top-0 bg-blue-700 text-white p-4">
       <Link to={'/dashboard/task'}> <h1 className="text-base md:text-xl lg:text-3xl font-bold mb-4"><span className="pb-2 border-b-2">Dashboard</span></h1></Link>
        <ul className="space-y-4 mt-5">
        <li><NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                    Home
        </NavLink>
    </li>
        <li><NavLink to={'/dashboard/task'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "underline"
                        : isPending
                        ? "pending"
                        : ""
                    }>
                    Tasks
        </NavLink>
    </li>    
        </ul>
      </div>
    );
};

export default Sidebar;