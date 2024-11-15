// import React from 'react';

const Navbar = () => {
   return (
      <div className="bg-gray-800 w-full">
         <nav className="navbar navbar-light px-4 py-2 flex items-center justify-between w-full bg-gray-800">
            <button className="transition transform duration-150 ease-in-out border-2 border-transparent px-4 py-2 bg-blue-500 text-white rounded-md hover:border-gray-400 hover:bg-transparent dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:active:bg-gray-500">
               Menu
            </button>
            <button className="transition transform duration-150 ease-in-out border-2 border-transparent px-4 py-2 text-white rounded-md bg-gray-700 hover:border-red-700 hover:bg-gray-600 active:bg-gray-500">
               Log out
            </button>
         </nav>
      </div>
   );
};

export default Navbar;
