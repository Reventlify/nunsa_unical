import { useState } from "react";
import classes from "../chats/chats.module.css";
import capitalize from "lodash.capitalize";
import truncate from "lodash.truncate";
import five from "../../../images/five.jpg";
import six from "../../../images/six.jpg";
import eight from "../../../images/eight.jpg";

const Chats = ({openChat}) => {
  const [chats, setChats] = useState([
    {
      chatId: "1",
      chatPaticipantA: "1a",
      chatPaticipantB: "2b",
      chatPaticipantB_name: "sunshine moon",
      chatPaticipantB_img: five,
      lastMessage: `The President of NUNSA UNICAL and his Executives, recognizing the importance of staying technologically up-to-date, took a proactive step by commissioning a developer to create a custom web application for the association. Understanding that the digital landscape plays a crucial role in modernizing organizations, the President's forward-thinking approach aimed to ensure that NUNSA would not lag behind in technology. By investing in this web app, the association can streamline its operations, enhance communication with members, and provide more efficient services to the community they serve. This strategic move demonstrates the President's commitment to keeping NUNSA relevant and responsive in the ever-evolving digital age.`,
      lastMessage_time: "23/8/23",
    },
    {
      chatId: "2",
      chatPaticipantA: "1a",
      chatPaticipantB: "3c",
      chatPaticipantB_name: "Florence Obi",
      chatPaticipantB_img: six,
      lastMessage: `Are you Eddy because you are the best, or are you the best because you are Eddy?`,
      lastMessage_time: "21/8/23",
    },
    {
      chatId: "3",
      chatPaticipantA: "1a",
      chatPaticipantB: "4d",
      chatPaticipantB_name: "Uchiha Madara",
      chatPaticipantB_img: eight,
      lastMessage: `Wake up to reality, nothing really goes as planned in this accursed world.`,
      lastMessage_time: "19/8/23",
    },
  ]);
  return (
    <>
      {chats.map((chat) => {
        return (
          <div
            className={`${classes.chat} container mt-3 hover`}
            key={chat.chatId}
            onClick={() => {
              localStorage.setItem("nunsaChat", chat.chatId)
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
                  {capitalize(chat.chatPaticipantB_name)}
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
  );
};

export default Chats;
