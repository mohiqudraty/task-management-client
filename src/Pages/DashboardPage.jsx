import { NavLink, Outlet } from "react-router-dom";

const DashboardPage = () => {
    return (
        <div>
            <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"><span className="pb-2 border-b-2">Dashboard</span></h1>
        <ul className="space-y-4 mt-5">
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
        <li><NavLink to={'/dashboard/task'}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "text-lg"
                    }>
                    Tasks
        </NavLink>
    </li>
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

          
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Welcome to Your Dashboard</h2>
        <div className="flex flex-wrap gap-4">
          {/* Sample Cards */}
          <div className="w-1/3 p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-2">Tasks</h3>
            <p className="text-gray-600">
              You have 5 tasks pending. Get started!
            </p>
          </div>

          <div className="w-1/3 p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-2">Calendar</h3>
            <p className="text-gray-600">
              Upcoming events and appointments.
            </p>
          </div>

          <div className="w-1/3 p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">
              Visualize your data and trends.
            </p>
          </div>
        </div>
      </div>
    </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardPage;