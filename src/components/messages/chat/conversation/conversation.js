import React, { useState, useEffect } from "react";
import moment from "moment";
import { socket } from "../../../../App";
import BottomSpace from "../../../bottomSpace";
import CustomLoader from "../../../loader/customLoader/CustomLoader";
import classes from "../conversation/convo.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

const Conversation = ({ receiverID, senderID, loadingP, messages }) => {
  const [msg, setMsg] = useState("");
  const receiver_id = receiverID.split("_");
  const [newDiscussions, setNewDiscussions] = useState([]);
  const [uniqueObjects, setUniqueObjects] = useState(new Set());

  useEffect(() => {
    const addObject = (newObject) => {
      setUniqueObjects((prevSet) => new Set([...prevSet, newObject]));
    };

    socket.on("receive_message", (message) => {
      addObject(message[0]);
    });
    // Scroll to the bottom when the component mounts (page loads)
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const onSend = (e) => {
    e.preventDefault();
    socket.emit("send_message", msg, receiver_id[1]);
    setMsg("");
  };

  const mergedMessages = [...messages, ...Array.from(uniqueObjects)];

  if (loadingP) {
    return <CustomLoader height={"100vh"} size={20} />;
  }

  return (
    <>
      <div className={` ${classes.display}`}>
        <div className="container">
          {mergedMessages.length === 0 ? (
            <div className="centerDiv fullscreen-30 container">
              <h4 className="blogText center">No messages yet...</h4>
            </div>
          ) : (
            mergedMessages.map((message) => (
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
                    {/* <span
                      className="blogText float-right"
                      style={{ fontSize: "12px", paddingTop: "0.7rem" }}
                    >
                      {moment(message.seen_at || message.originalTime).format(
                        "HH:mm A"
                      )}
                    </span> */}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <BottomSpace />
      </div>

      <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
        <div className="container">
          <form className={`d-flex mb-2 mt-2`} onSubmit={onSend}>
            <textarea
              placeholder={mergedMessages.length === 0 ? "Say hi..." : "Message..."}
              id="IdOfCommentArea"
              className={`form-control me-2 b`}
              autoComplete="off"
              autoCorrect="off"
              rows="2"
              aria-describedby="regimeDescriptionHelp"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
            <button className="btn bottomShadow btnct btnct-nunsa" type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Conversation;
