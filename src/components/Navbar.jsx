import React from "react";

export const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex border border-b-gray-200 mb-4 justify-between items-center">
            <nav className="flex w-full text-3xl font-bold screen-max-width">
                Terntribe build
                {/* <div className="flex flex-1 justify-center max-sm:hidden">
                    <div className="px-3 text-sm cursor-pointer text-gray hover:text-gray-500 transition-all">
                        Home
                    </div>
                    <div className="px-3 text-sm cursor-pointer text-gray hover:text-gray-500 transition-all">
                        About
                    </div>
                    <div className="px-3 text-sm cursor-pointer text-gray hover:text-gray-500 transition-all">
                        Contact
                    </div>
                </div> */}
            </nav>
        </header>
    );
};
