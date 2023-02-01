import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <a href="/">
            <span className="text-2xl font-extrabold text-indigo-500">Todos List</span>
          </a>
          <div className="flex items-center space-x-1">
            <div className="inline-flex md:hidden">
              <button className="flex-none px-2 ">
                <span className="sr-only">Open Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
