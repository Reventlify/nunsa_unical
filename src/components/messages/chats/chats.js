import { useState, useEffect } from "react";
import classes from "../chats/chats.module.css";
import truncate from "lodash.truncate";
import ChatIcon from "@mui/icons-material/Chat";
import { startWithCase } from "../../../utilities/text";
import { testChats } from "../../../testData/tesData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BottomSpace from "../../bottomSpace";
import { useNavigate } from "react-router-dom";

const Chats = ({ navAction }) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState(testChats);
  return (
    <>
      <div className={classes.chatHelper}>
        {chats.length === 0 ? (
          <>
            <div className={`${classes.noChat}`}>
              <h2
                className="blogText hover"
                onClick={() => {
                  navAction("people");
                }}
              >
                Start a chat...
              </h2>
            </div>
          </>
        ) : (
          <>
            {chats.map((chat) => {
              return (
                <div
                  className={`${classes.chat} container hover`}
                  key={chat.chatId}
                  style={
                    chat.chatPaticipantB_img.length === 0
                      ? { paddingLeft: "0.35rem" }
                      : {}
                  }
                  onClick={() => {
                    navigate(`/student/messages/chat/${chat.chatId}`);
                  }}
                >
                  <div>
                    {chat.chatPaticipantB_img.length === 0 ? (
                      <AccountCircleIcon
                        style={{
                          fontSize: "65px",
                          color: "#adadad",
                          marginRight: "0.7rem",
                          padding: 0,
                        }}
                      />
                    ) : (
                      <img
                        className="circle mr-2"
                        src={chat.chatPaticipantB_img}
                        height="55px"
                        width="55px"
                      />
                    )}
                  </div>
                  <div
                    className={`${classes.chatChild} ${classes.seventy}  flex-column`}
                    style={
                      chat.chatPaticipantB_img.length === 0
                        ? { marginTop: "0.3rem" }
                        : {}
                    }
                  >
                    <div className={`flex-row`}>
                      <div
                        className={`${classes.chatChild} bold`}
                        style={{ fontSize: "18px" }}
                      >
                        {startWithCase(chat.chatPaticipantB_name)}
                      </div>
                      <div className="blogText" style={{ fontSize: "14px" }}>
                        {chat.lastMessage_time}
                      </div>
                    </div>
                    <div className={`${classes.end}`}>
                      <div className={` blogText`} style={{ fontSize: "14px" }}>
                        {truncate(chat.lastMessage, {
                          length: 30,
                          // separator: /,? +/,
                        })}
                      </div>
                      {/* <div className="blogText"></div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}

        <BottomSpace />
      </div>
      <div className={`fixed-bottom`} style={{ width: "100%" }}>
        <div className="float-right mr-1">
          <span
            className="hover mb-2"
            onClick={() => {
              navAction("people");
            }}
          >
            <ChatIcon
              className="nunsa bg-white"
              style={{ fontSize: "42px", opacity: 10 }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Chats;
