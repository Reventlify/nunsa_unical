import { useState, useEffect } from "react";
import MessageNav from "./messageNav/messageNav";
import Chats from "./chats/chats";
import Chat from "./chat/chat";
import People from "./people/people";

const MessageMain = () => {
  const [currentPage, setCurrentPage] = useState("chats");
  const [mainPage, setMainPage] = useState();
  const navTo = (route) => {
    setCurrentPage(route);
  };

  const openChat = (bool) => {
    setMainPage(bool);
  };

  useEffect(() => {
    if (localStorage.getItem("nunsaChat") === null) {
      setMainPage(true);
    } else {
      setMainPage(false);
    }
  }, []);
  if (mainPage) {
    return (
      <>
        <MessageNav navAction={navTo} currentPage={currentPage} />
        {currentPage === "chats" ? <Chats openChat={openChat} navAction={navTo} /> : <People navAction={navTo}/>}
      </>
    );
  } else {
    return <Chat openChat={openChat} />;
  }
};

export default MessageMain;
