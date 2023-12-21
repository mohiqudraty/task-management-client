import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <main className="container mx-auto min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </main>
    );
};

export default Root;