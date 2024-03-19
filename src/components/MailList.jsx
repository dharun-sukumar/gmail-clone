import React, { useState, useEffect } from "react";
import { FaRegStar } from "react-icons/fa6";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const MailList = ({ mails }) => {
  const [isHovered, setIsHovered] = useState(Array(mails.length).fill(false));

  useEffect(() => {
    setIsHovered(Array(mails.length).fill(false));
  }, [mails]);

  const handleMouseEnter = (index) => {
    setIsHovered((prevHovered) =>
      prevHovered.map((val, i) => (i === index ? true : val))
    );
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevHovered) =>
      prevHovered.map((val, i) => (i === index ? false : val))
    );
  };

  return (
    <div>
      {mails.map((mail, index) => (
        <div key={index}>
          <hr className="" />
          <div
            className="flex p-2 justify-between hover:shadow-md"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="flex items-center text-sm font-medium">
              <input type="checkbox" name="checkbox" />
              <FaRegStar className={`h-4 w-4 ml-2 ${mail.isStarred ? 'text-yellow-500' : ''}`} />
              <div className="ml-2">{mail.sender}</div>
            </div>

            <div className="flex text-sm font-medium">
              <div className="flex">{mail.subject} - </div>
              <div className="flex justify-between ">
                <div className="">{mail.body}</div>
                <div className="ml-8 mr-4 text-sm">
                  {isHovered[index] ? (
                    <div className="flex">
                      <RiInboxArchiveLine className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />{" "}
                      <MdOutlineDeleteForever className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />{" "}
                      <MdOutlineMarkAsUnread className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />{" "}
                      <IoMdTime className="h-4 w-4 mr-2 rounded-full hover:bg-slate-300" />{" "}
                    </div>
                  ) : (
                    mail.date
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MailList;
