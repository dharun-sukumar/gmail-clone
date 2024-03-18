import React from "react";
import mailsData from "./mails.json";
import MailList from "./MailList";

function Content() {
  return (
    <div className="">
      <MailList mails={mailsData} />
    </div>
  );
}

export default Content;
