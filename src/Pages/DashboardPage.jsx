import {  Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";


const DashboardPage = () => {
    return (
     <div className="flex h-screen">
      {/* Sidebar */}
     <Sidebar></Sidebar>

      {/* Main Content */}
      <Outlet></Outlet>
    </div>
            
      
    );
};

export default DashboardPage;