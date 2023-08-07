import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "../chat/chat.module.css";
import { useState, useEffect } from "react";
import { testChats } from "../../../testData/tesData";
import Conversation from "./conversation/conversation";

const Chat = ({ openChat }) => {
  const [partner, setPartner] = useState({
    chatId: "",
    chatPaticipantA: "",
    chatPaticipantB: "",
    chatPaticipantB_name: "",
    chatPaticipantB_img: "",
    lastMessage: "",
    lastMessage_time: "",
  });
  const [id, setId] = useState(localStorage.getItem("nunsaChat"));

  const userGotten = testChats.filter((person) => {
    if (person.chatId === id) {
      return person;
    }
  });
  useEffect(() => {
    setPartner(userGotten[0]);
  });
  return (
    <div className={`${classes.chat}`}>
      <div className={classes.clasHelper}>
        <div className="container">
          <div
            className="limiter hover inline-block"
            onClick={() => {
              localStorage.clear("nunsaChat");
              openChat(true);
            }}
          >
            <span className="hover">
              <ArrowBackIcon />
            </span>
            &nbsp;
          </div>
          <img
            src={partner.chatPaticipantB_img}
            alt="user"
            width="40px"
            height="40px"
            className="round"
          />
          <span className="float-right bolder">
            {partner.chatPaticipantB_name} {localStorage.getItem("nunsaChat")}
          </span>
        </div>
      </div>
      <Conversation />
    </div>
  );
};

export default Chat;
