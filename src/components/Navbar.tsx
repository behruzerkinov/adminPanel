const Navbar = () => {
   return (
      <div className="bg-gray-200 h-fit w-full flex align-center justify-between">
         <nav className="navbar navbar-expand-lg navbar-light px-4 py-2">
            <button className="border-solid px-4 py-2 border-2 border-transparent active:border-blue-500 active:bg-white active:text-blue-500 bg-blue-500 text-white bg rounded-md">
               Menu
            </button>
         </nav>
      </div>
   );
};

export default Navbar;
