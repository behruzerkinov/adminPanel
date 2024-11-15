// import React from 'react';

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
    <div className="w-max h-screen bg-[#0f172a]">
      <h1 className="tracking-widest text-center p-4 font-semibold text-lg text-gray-400 hover:text-white transition-colors duration-300">
        AutozoomAdmin
      </h1>

      <ul className="space-y-2 mt-2 text-gray-400">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`px-6 py-3 flex gap-4 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-300 group`}
          >
            <i
              className={`${item.icon} text-gray-500 group-hover:text-white transition-colors duration-300`}
            ></i>
            <span className={`${index === 0 ? 'text-blue-500' : ''}`}>
              {item.item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
