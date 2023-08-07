import { useState, useEffect } from "react";
import MessageNav from "./messageNav/messageNav";
import Chats from "./chats/chats"
import People from "./people/people";

const MessageMain = () => {
  const [currentPage, setCurrentPage] = useState("chats");
  const navTo = (route) => {
    setCurrentPage(route);
  };

  return (
    <>
      <MessageNav navAction={navTo} currentPage={currentPage} />
      {currentPage === "chats" ? (
        <Chats navAction={navTo} />
      ) : (
        <People navAction={navTo} />
      )}
    </>
  );
};

export default MessageMain;
