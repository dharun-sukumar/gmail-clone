import React from "react";
import mailsData from "../mails.json";
import MailList from "../MailList";
import StarredList from "./StarredList";

function Content() {
  return (
    <div className="">
      <StarredList mails={mailsData} />
    </div>
  );
}

export default Content;
