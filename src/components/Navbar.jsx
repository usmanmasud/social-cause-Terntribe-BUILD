import React from "react";

export const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                SOCIAL CAUSE
                <div className="flex flex-1 justify-center max-sm:hidden">
                    <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        Home
                    </div>
                    <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        About
                    </div>
                    <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        Contact
                    </div>
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">

                </div>
            </nav>
        </header>
    );
};
