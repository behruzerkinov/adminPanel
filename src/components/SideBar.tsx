const SideBar = () => {
   const menuItems = [
      { item: "Dashboard", icon: "fi fi-rr-dashboard" },
      { item: "Settings", icon: "fi fi-rr-settings" },
      { item: "Brands", icon: "fi fi-rr-bookmark" },
      { item: "Models", icon: "fi fi-rr-apps" },
      { item: "Locations", icon: "fi fi-rr-marker" },
      { item: "Cities", icon: "fi fi-rr-building" },
      { item: "Cars", icon: "fi fi-rr-car" },
   ];

   return (
      <div className="w-max h-screen bg-[#00152a]">
         <h1 className="tracking-widest transition-colors duration-500 text-center p-4 font-semibold text-lg text-gray-500 hover:text-white">
            AutozoomAdmin
         </h1>

         <ul className="space-y-2 mt-2 text-gray-800">
            {menuItems.map((item, index) => {
               return (
                  <li
                     key={index}
                     className={`px-6 py-3 ${
                        index === 0 && "active:bg-blue-600"
                     } active:bg-blue-600 flex gap-4 rounded-md text-gray-300 hover:text-white transition-colors duration-300 group`}
                  >
                     <i
                        className={`${item.icon} text-[#b9b9b9] group-hover:text-white transition-colors duration-300`}
                     ></i>
                     {item.item}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default SideBar;
