import { useState } from "react";
import MessageNav from "./messageNav/messageNav";
import Chats from "./chats/chats";

const MessageMain = () => {
  const [currentPage, setCurrentPage] = useState("chats");

  const navTo = (route) => {
    setCurrentPage(route);
  };
  return (
    <>
      <MessageNav navAction={navTo} currentPage={currentPage} />
      {currentPage === "chats" ? <Chats /> : ""}
    </>
  );
};

export default MessageMain;
