import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
// import Table from "./Table";

export default function HomePage() {
   return (
      <div className="flex h-full dark:bg-gray-900">
         <div className="dark:bg-gray-800">
            <SideBar />
         </div>
         <div className="flex-col w-full dark:bg-gray-900">
            <Navbar />
            <Outlet />
         </div>
      </div>
   );
}
