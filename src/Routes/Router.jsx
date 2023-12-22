import {
    createBrowserRouter,
  
  } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Features from "../Pages/Features";
import Root from "../Root/Root";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import DashboardPage from "../Pages/DashboardPage";
import Task from "../Components/Dashboard/Task";

  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/features',
          element: <Features></Features>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
      
    },
    {
      path: '/register',
      element: <Register></Register>
    
    },
    {
      path: '/login',
      element: <Login></Login>
    
    },
    {
      path: '/dashboard',
      element: <DashboardPage></DashboardPage>,
      children: [
        {
          path: '/dashboard/task',
          element: <Task></Task>
        },
       
      ]
    }
   
  ]);

 export default router