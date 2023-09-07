// import React, { useState, useEffect, useRef } from "react";
// import moment from "moment";
// import { socket } from "../../../../App";
// import BottomSpace from "../../../bottomSpace";
// import CustomLoader from "../../../loader/customLoader/CustomLoader";
// import classes from "../conversation/convo.module.css";
// import ChatIcon from "@mui/icons-material/Chat";
// import SendIcon from "@mui/icons-material/Send";

// const Conversation = ({ receiverID, senderID, loadingP, messages }) => {
//   const [msg, setMsg] = useState("");
//   const receiver_id = receiverID.split("_");
//   const [newDiscussions, setNewDiscussions] = useState([]);
//   const [uniqueObjects, setUniqueObjects] = useState(new Set());
//   const bottomSpaceRef = useRef(null);

//   useEffect(() => {
//     const addObject = (newObject) => {
//       setUniqueObjects((prevSet) => new Set([...prevSet, newObject]));
//     };

//     socket.on("receive_message", (message) => {
//       addObject(message[0]);
//       scrollToBottom();
//     });
//   }, []);

//   const scrollToBottom = () => {
//     if (bottomSpaceRef.current) {
//       bottomSpaceRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const onSend = (e) => {
//     e.preventDefault();
//     socket.emit("send_message", msg, receiver_id[1]);
//     setMsg("");
//   };

//   const mergedMessages = [...messages, ...Array.from(uniqueObjects)];

//   if (loadingP) {
//     return <CustomLoader height={"100vh"} size={20} />;
//   }

//   return (
//     <>
//       <div className={` ${classes.display}`}>
//         <div className="container">
//           {mergedMessages.length === 0 ? (
//             <div className="centerDiv fullscreen-30 container">
//               <h4 className="blogText center">No messages yet...</h4>
//             </div>
//           ) : (
//             mergedMessages.map((message) => (
//               <div
//                 className={
//                   message.sender_id === senderID
//                     ? classes.rightHelper
//                     : classes.leftHelper
//                 }
//                 key={message.message_id}
//               >
//                 <div
//                   className={
//                     message.sender_id === senderID
//                       ? `${classes.convoRight} paddFull-1 mt-3`
//                       : `${classes.convoLeft} paddFull-1 mt-3`
//                   }
//                 >
//                   <p>
//                     {message.message_text}
//                     <br />
//                     <span
//                       className="blogText float-right"
//                       style={{ fontSize: "12px", paddingTop: "0.7rem" }}
//                     >
//                       {moment(message.sent_at || message.originalTime).format(
//                         "HH:mm A"
//                       )}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             ))
//           )}
//           <div ref={bottomSpaceRef} style={{height: "100px"}}></div>
//         </div>
//         <BottomSpace />
//       </div>

//       <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
//         <div className="container">
//           <form className={`d-flex mb-2 mt-2`} onSubmit={onSend}>
//             <textarea
//               placeholder={
//                 mergedMessages.length === 0 ? "Say hi..." : "Message..."
//               }
//               id="IdOfCommentArea"
//               className={`form-control me-2 b`}
//               autoComplete="off"
//               autoCorrect="off"
//               rows="2"
//               aria-describedby="regimeDescriptionHelp"
//               value={msg}
//               onChange={(e) => setMsg(e.target.value)}
//               required
//             />
//             <button
//               className="btn bottomShadow btnct btnct-nunsa"
//               type="submit"
//             >
//               <SendIcon />
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Conversation;

import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { socket } from "../../../../App";
import BottomSpace from "../../../bottomSpace";
import CustomLoader from "../../../loader/customLoader/CustomLoader";
import classes from "../conversation/convo.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

const Conversation = ({ receiverID, senderID, loadingP, messages, typing }) => {
  const [msg, setMsg] = useState("");
  // const receiver_id = receiverID.split("_");
  const [newDiscussions, setNewDiscussions] = useState([]);
  const [uniqueObjects, setUniqueObjects] = useState(new Set());
  const bottomSpaceRef = useRef(null); // Ref to the BottomSpace component

  const onSend = (e) => {
    e.preventDefault();
    // typing(false);
    socket.emit("send_message", msg, receiverID);
    setMsg("");
  };

  useEffect(() => {
    const addObject = (newObject) => {
      setUniqueObjects((prevSet) => new Set([...prevSet, newObject]));
    };

    socket.on("receive_message", (message) => {
      addObject(message[0]);
      scrollToBottom(); // Scroll to the bottom when a new message arrives
    });
  }, []);

  const handleTyping = () => {
    if (msg.length > 0) {
      // typing(true);
      socket.emit("typing", true, receiverID);
    } else {
      // typing(false);
      socket.emit("typing", false, receiverID);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the conversation when messages change
    if (bottomSpaceRef.current) {
      bottomSpaceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    handleTyping();
  }, [messages, uniqueObjects, handleTyping]);

  const groupMessagesByDate = (messageList) => {
    const messageGroups = [];
    let currentDate = null;

    messageList.forEach((message) => {
      const messageDate = moment(
        message.sent_at || message.originalTime
      ).format("MMM D, YYYY");

      if (messageDate !== currentDate) {
        currentDate = messageDate;
        messageGroups.push({
          date: currentDate,
          messages: [],
        });
      }

      messageGroups[messageGroups.length - 1].messages.push(message);
    });

    return messageGroups;
  };

  const scrollToBottom = () => {
    if (bottomSpaceRef.current) {
      bottomSpaceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderMessageGroups = (messageGroups) => {
    return messageGroups.map((group, index) => (
      <div key={index}>
        <div className={classes.dateSeparator}>
          <div className={`limiter bold ${classes.dateS} mt-3`}>
            {formatDateGroupTitle(group.date)}
          </div>
        </div>
        {group.messages.map((message) => (
          <div
            className={
              message.sender_id === senderID
                ? classes.rightHelper
                : classes.leftHelper
            }
            key={message.message_id}
          >
            <div
              className={
                message.sender_id === senderID
                  ? `${classes.convoRight} paddFull-1 mt-3`
                  : `${classes.convoLeft} paddFull-1 mt-3`
              }
            >
              <p>
                {message.message_text}
                <br />
                <span
                  className="blogText float-right"
                  style={{ fontSize: "12px", paddingTop: "0.7rem" }}
                >
                  {moment(message.sent_at || message.originalTime).format(
                    "h:mm A"
                  )}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  const formatDateGroupTitle = (date) => {
    const today = moment().format("MMM D, YYYY");
    const yesterday = moment().subtract(1, "days").format("MMM D, YYYY");

    if (date === today) {
      return "Today";
    } else if (date === yesterday) {
      return "Yesterday";
    } else {
      return date;
    }
  };

  const mergedMessages = [...messages, ...Array.from(uniqueObjects)].sort(
    (a, b) =>
      moment(a.sent_at || a.originalTime) - moment(b.sent_at || b.originalTime)
  );

  if (loadingP) {
    return <CustomLoader height={"100vh"} size={20} />;
  }

  const messageGroups = groupMessagesByDate(mergedMessages);

  return (
    <>
      <div className={` ${classes.display}`}>
        <div className="container">
          {messageGroups.length === 0 ? (
            <div className="centerDiv fullscreen-30 container">
              <h4 className="blogText center">No messages yet...</h4>
            </div>
          ) : (
            renderMessageGroups(messageGroups)
          )}
          {/* Add an empty div with ref to scroll to */}
          <div ref={bottomSpaceRef}></div>
        </div>
      </div>
      <BottomSpace />

      <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
        <div className="container">
          <form className={`d-flex mb-2 mt-2`} onSubmit={onSend}>
            <textarea
              placeholder={
                mergedMessages.length === 0 ? "Say hi..." : "Message..."
              }
              id="IdOfCommentArea"
              className={`form-control me-2 b`}
              autoComplete="off"
              autoCorrect="off"
              rows="2"
              aria-describedby="regimeDescriptionHelp"
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              required
            />
            <button
              className="btn bottomShadow btnct btnct-nunsa"
              type="submit"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Conversation;
