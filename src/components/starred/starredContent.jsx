import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";

function StarredContent() {
  const history = useNavigate();

  const handleClickInbox = () => {
    history("/");
    console.log("clicked inbox");
  };
  return (
    <div className="flex flex-col ml-3 mr-3">
      <div className="bg-[#c2e7ff] mt-2 mb-2 rounded-xl w-32">
        <div className="flex items-center justify-center text-sm h-12 w-29">
          <BiPencil className="h-5 w-5 mr-4" />
          Compose
        </div>
      </div>
      <div
        className="flex items-center justify-center w-52 rounded-xl mt-2"
        onClick={handleClickInbox}
      >
        <div className="flex w-[90%] items-center h-7 justify-center">
          <MdInbox className="mr-4 h-5 w-5" />
          <div className="flex text-sm font-medium justify-between items-center w-[100%]">
            <p>Inbox</p>
            <p className="text-xs "></p>
          </div>
        </div>
      </div>
      <div className="bg-[#d3e3fd] flex items-center justify-center w-52 rounded-xl mt-2">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <FaRegStar className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Starred</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-52 rounded-xl mt-2">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <MdAccessTime className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Snoozed</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-52 rounded-xl mt-2">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <AiOutlineSend className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Sent</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-52 rounded-xl mt-2">
        <div className="flex w-[90%] items-center h-7 justify-center">
          <RiDraftLine className="mr-4 h-5 w-5" />
          <div className="flex text-sm justify-between items-center w-[100%]">
            <p>Drafts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarredContent;
