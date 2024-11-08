const SideBar = () => {
   return (
      <div className="w-[240px] h-screen bg-[#00152a]">
         <h1 className="text-center border border-solid border-red-500 p-4 font-bold text-lg text-gray-500 hover:text-white">
            AutozoomAdmin
         </h1>

         <ul className="space-y-2 mt-2 text-gray-800">
            <li className="p-2 active:bg-blue-600">Dashboard</li>
            <li className="p-2 active:bg-blue-600">Settings</li>
            <li className="p-2 active:bg-blue-600">Brands</li>
            <li className="p-2 active:bg-blue-600">Models</li>
            <li className="p-2 active:bg-blue-600">Locations</li>
            <li className="p-2 active:bg-blue-600">Cities</li>
            <li className="p-2 active:bg-blue-600">Cars</li>
         </ul>
      </div>
   );
};

export default SideBar;
