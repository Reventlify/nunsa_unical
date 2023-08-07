import { useState, useEffect } from "react";
import classes from "../chats/chats.module.css";
import truncate from "lodash.truncate";
import ChatIcon from "@mui/icons-material/Chat";
import { startWithCase } from "../../../utilities/text";
import { testChats } from "../../../testData/tesData";
import BottomSpace from "../../bottomSpace";

const Chats = ({ openChat, navAction }) => {
  const [chats, setChats] = useState(testChats);
  return (
    <>
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
                className={`${classes.chat} container mt-3 hover`}
                key={chat.chatId}
                onClick={() => {
                  localStorage.setItem("nunsaChat", chat.chatId);
                  openChat(false);
                }}
              >
                <div>
                  <img
                    className="circle mr-2"
                    src={chat.chatPaticipantB_img}
                    height="55px"
                    width="55px"
                  />
                </div>
                <div
                  className={`${classes.chatChild} ${classes.seventy}  flex-column`}
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
      <div className={`fixed-bottom`} style={{ width: "100%" }}>
        <div className="float-right mr-1">
          <span
            className="hover mb-2"
            onClick={() => {
              navAction("people");
            }}
          >
            <ChatIcon className="nunsa" style={{ fontSize: "42px" }} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Chats;
