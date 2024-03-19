import React from "react";
import StarredContent from "./starredContent"
import Sidebar from "../Sidebar";
import AddOns from "../AddOns";
import Navbar from "../Navbar";
import StarredOptionsTop from "./starredOptionOnTop";

function Starred() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <StarredContent />
        <StarredOptionsTop />
        <AddOns />
      </div>
    </div>
  );
}

export default Starred;
