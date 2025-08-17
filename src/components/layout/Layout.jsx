import React from "react";
import NavigationSidebar from "@/components/layout/NavigationSidebar.jsx";
import QuickAccessSidebar from "@/components/layout/QuickAccessSidebar.jsx";

const Layout = ({ children }) => {
    return (
        // 1) Lock the viewport height and stop the BODY from scrolling
        <div className="h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* keep your page padding, but fill the height */}
            <div className="h-full mx-auto p-4">
                {/* 2) The flex row must also fill height */}
                <div className="h-full flex gap-6">
                    {/* 3) Each column: give it a height and overflow-y-auto */}
                    <div className="w-64 h-full overflow-y-auto min-h-0">
                        <NavigationSidebar />
                    </div>

                    {/* min-w-0 lets content shrink so the scrollbar can appear correctly */}
                    <div className="flex-1 h-full overflow-y-auto min-h-0 min-w-0 ml-32 mr-32">
                        {children}
                    </div>

                    <div className="w-80 h-full overflow-y-auto min-h-0">
                        <QuickAccessSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
