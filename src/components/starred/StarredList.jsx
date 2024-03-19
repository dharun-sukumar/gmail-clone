import React from "react";
import { FaRegStar } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineDeleteForever, MdOutlineMarkAsUnread } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const StarredList = ({ mails }) => {
  const [isHovered, setIsHovered] = React.useState([]);
  const navigate = useNavigate();


  const handleMouseEnter = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

const handleClick = (mail) => {
    navigate('/next-page', { state: { subject: mail.body } });
};

  return (
    <div>
      {mails
        .filter((mail) => mail.isStarred)
        .map((mail, index) => (
          <div key={index}>
            <hr className="" />
            <div
              className="flex p-2 justify-between hover:shadow-md"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(mail)}
            >
              <div className="flex items-center text-sm font-medium">
                <input type="checkbox" name="checkbox" />
                <FaRegStar
                  className={`h-4 w-4 ml-2 ${
                    mail.isStarred ? "text-yellow-500" : ""
                  }`}
                />
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
          </div>
        ))}
    </div>
  );
};

export default StarredList;
