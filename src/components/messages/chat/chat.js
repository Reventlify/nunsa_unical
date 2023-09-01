import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "../chat/chat.module.css";
import { useState, useEffect } from "react";
import { testChats } from "../../../testData/tesData";
import Conversation from "./conversation/conversation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { startWithCase } from "../../../utilities/text";
import { useNavigate, useParams } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [partner, setPartner] = useState({
    chatId: "",
    chatPaticipantA: "",
    chatPaticipantB: "",
    chatPaticipantB_name: "",
    chatPaticipantB_img: "",
    lastMessage: "",
    lastMessage_time: "",
  });
  // const [id, setId] = useState(localStorage.getItem("nunsaChat"));

  const userGotten = testChats.filter((person) => {
    if (person.chatId === id) {
      return person;
    }
  });
  useEffect(() => {
    setPartner(userGotten[0]);
  });
  return (
    <>
      {/* // <div className={`${classes.chat}`}> */}
      <div className={`bg-nunsa fixed-top`} style={{width: "100%"}}>
      <div className={`container bg-nunsa  ${classes.nav}`}>
        <div className={`${classes.barFlex}`}>
          <div className={`mr-2`}>
            <span
              className="hover white"
              onClick={() => {
                navigate("/student/messages");
              }}
            >
              <ArrowBackIcon style={{ fontSize: "35px" }} />
            </span>
            &nbsp;
            {partner.chatPaticipantB_img.length === 0 ? (
              <AccountCircleIcon
                className="circle"
                style={{
                  fontSize: "55px",
                  color: "#adadad",
                  backgroundColor: "white"
                }}
              />
            ) : (
              <img
                src={partner.chatPaticipantB_img}
                alt="user"
                width="55px"
                height="55px"
                className="round"
              />
            )}
          </div>
          <div className={`${classes.onOrOff}`}>
            <div className="bolder white" style={{ fontSize: "16px" }}>
              {startWithCase(partner.chatPaticipantB_name)}
            </div>
            <div className="white" style={{color: "#f0f2f5"}}>offline</div>
          </div>
        </div>
      </div>
      </div>
      <Conversation receiberID={id} />
    </>
  );
};

export default Chat;
