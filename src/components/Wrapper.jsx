import React from "react";
import Sidebar from "./Sidebar";
import Content from "./SidebarExtend";
import OptionsTop from "./OptionsTop";
import AddOns from "./AddOns";
import Navbar from "./Navbar";

function Wrapper() {
    return (
        <div className="">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Content />
                <OptionsTop />
                <AddOns />
            </div>
        </div>

    );
}

export default Wrapper;