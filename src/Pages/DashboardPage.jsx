import {  Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import TopBar from "../Components/Dashboard/TopBar";


const DashboardPage = () => {
    return (
    <section>
         <TopBar></TopBar>
         <div className="flex h-screen">
        {/* top bar */}
       
      {/* Sidebar */}
     <Sidebar></Sidebar>

      {/* Main Content */}
      <Outlet></Outlet>
    </div>
    </section>
            
      
    );
};

export default DashboardPage;