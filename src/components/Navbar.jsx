import React from "react";
import logo from "../assets/logo_gmail_lockup_dark_1x_r5.png"
import dp from "../assets/me.jpg"
import {FiMenu} from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoMdOptions } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";



function Navbar() {
    return (
        <div className="flex flex-row  items-center w-[100%] h-14">
            <FiMenu className="w-[20px] h-[20px] m-5 mr-10 bg-[#eaf1fb]"/>
            <img className="h-[32px] w-[90px] mr-28" src={logo} alt="logo" />
            <div className="bg-slate-200 w-[55%] rounded-full relative mr-36">
                <input className="mr-4 bg-slate-200 w-[70%] h-10 ml-8 focus:outline-none" type="text" name="search" id="search" placeholder="Search in mail" />
                <FiSearch className="absolute left-3 top-3" />
                <IoMdOptions className="absolute right-3 top-3" />
            </div>
            <FaRegQuestionCircle className="w-[24px] h-[24px] m-4"/>
            <IoSettingsOutline className="w-[24px] h-[24px] m-4"/>
            <CgMenuGridO className="w-[24px] h-[24px] m-4"/>
            <img className="h-8 w-8 rounded-full m-4" src={dp} alt="dp" />
        </div>
    );
}

export default Navbar;