import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "../chat/chat.module.css";
import { useState, useEffect } from "react";
import { testChats } from "../../../testData/tesData";
import Conversation from "./conversation/conversation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
          <div className={`${classes.barFlex}`}>
            <div className={`mr-1`}>
              <span
                className="hover"
                onClick={() => {
                  localStorage.clear("nunsaChat");
                  openChat(true);
                }}
              >
                <ArrowBackIcon style={{ fontSize: "30px" }} />
              </span>
              &nbsp;
              {partner.chatPaticipantB_img.length === 0 ? (
                <AccountCircleIcon
                  style={{
                    fontSize: "55px",
                    color: "#adadad",
                  }}
                />
              ) : (
                <img
                  src={partner.chatPaticipantB_img}
                  alt="user"
                  width="45px"
                  height="45px"
                  className="round"
                />
              )}
            </div>
            <div className={`${classes.onOrOff}`}>
              <div className="bolder" style={{ fontSize: "16px" }}>
                {partner.chatPaticipantB_name}
              </div>
              <div className="blogText">offline</div>
            </div>
          </div>
        </div>
      </div>
      <Conversation />
    </div>
  );
};

export default Chat;
