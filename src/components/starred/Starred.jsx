import React from "react";
import StarredContent from "./starredContent"
import Sidebar from "../Sidebar";
import OptionsTop from "../OptionsTop";
import AddOns from "../AddOns";
import Navbar from "../Navbar";

function Starred() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <StarredContent />
        <OptionsTop />
        <AddOns />
      </div>
    </div>
  );
}

export default Starred;
