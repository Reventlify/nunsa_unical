import { socket } from "../../../../App";
// import socket from "../../../../socket";
import BottomSpace from "../../../bottomSpace";
import moment from "moment";
import CustomLoader from "../../../loader/customLoader/CustomLoader";
import classes from "../conversation/convo.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const Conversation = ({ receiverID, senderID, loadingP, messages }) => {
  const [msg, setMsg] = useState("");
  const receiver_id = receiverID.split("_");
  const discussion = messages;
  const [newDiscussions, setNewDiscussions] = useState([]);
  const [uniqueObjects, setUniqueObjects] = useState(new Set());

  const addObject = (newObject) => {
    // Convert the object to a JSON string
    const objectString = JSON.stringify(newObject);

    // Use the spread operator to create a new Set with the existing values
    setUniqueObjects((prevSet) => new Set([...prevSet, objectString]));
  };
  const objectsArray = Array.from(uniqueObjects).map((objectString) => {
    // Convert the JSON string back to an object
    return JSON.parse(objectString);
  });
  // const [iTyped, setITyped] = useState([]);
  socket.on("receive_message", (message) => {
    console.log(message[0]);
    // Check if the message is already in the discussion
    // const isDuplicate = newDiscussions.some(
    //   (existingMessage) =>
    //     // Customize the condition to check for duplicates based on your message structure
    //     existingMessage.message_id === message[0].message_id
    // );

    // if (!isDuplicate) {
    addObject(message[0]);
    // }
  });
  const onSend = (e) => {
    e.preventDefault();
    socket.emit("send_message", msg, receiver_id[1]);
    return setMsg("");
  };

  if (loadingP) {
    return <CustomLoader height={"100vh"} size={20} />;
  } else {
    return (
      <>
        <div className={` ${classes.display}`}>
          <div className="container">
            {messages.length !== 0 ? (
              discussion.map((message, i) => {
                if (message.sender_id === senderID) {
                  return (
                    <div
                      className={classes.rightHelper}
                      key={message.message_id}
                    >
                      <div className={`${classes.convoRight} paddFull-1 mt-3`}>
                        <p>
                          {message.message_text}
                          <br />
                          <span
                            className="blogText float-right"
                            style={{ fontSize: "12px", paddingTop: "0.7rem" }}
                          >
                            {moment(message.seen_at).format("HH:mm A")}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={classes.leftHelper}
                      key={message.message_id}
                    >
                      <div className={`${classes.convoLeft} paddFull-1 mt-3`}>
                        <p>
                          {message.message_text}
                          <br />
                          <span
                            className="blogText float-right"
                            style={{ fontSize: "12px", paddingTop: "0.7rem" }}
                          >
                            {moment(message.seen_at).format("HH:mm A")}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="centerDiv fullscreen-30 container">
                <h4 className="blogText center">No messages yet...</h4>
              </div>
            )}
            {objectsArray.length !== 0
              ? objectsArray.map((message, i) => {
                  if (message.sender_id === senderID) {
                    return (
                      <div
                        className={classes.rightHelper}
                        key={message.message_id}
                      >
                        <div
                          className={`${classes.convoRight} paddFull-1 mt-3`}
                        >
                          <p>
                            {message.message_text}
                            <br />
                            <span
                              className="blogText float-right"
                              style={{ fontSize: "12px", paddingTop: "0.7rem" }}
                            >
                              {moment(message.seen_at).format("HH:mm A")}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={classes.leftHelper}
                        key={message.message_id}
                      >
                        <div className={`${classes.convoLeft} paddFull-1 mt-3`}>
                          <p>
                            {message.message_text}
                            <br />
                            <span
                              className="blogText float-right"
                              style={{ fontSize: "12px", paddingTop: "0.7rem" }}
                            >
                              {moment(message.seen_at).format("HH:mm A")}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  }
                })
              : ""}
          </div>
          <BottomSpace />
        </div>

        <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
          <div className="container">
            <form className={`d-flex mb-2 mt-2`} onSubmit={onSend}>
              {/* <input
                className={`form-control me-2 b`}
                type="search"
                //   placeholder={search}
                aria-label="Search"
              /> */}
              <textarea
                placeholder={messages.length === 0 ? "Say hi..." : "Message..."}
                id="IdOfCommentArea"
                //   onBlur={() => {
                //     setStudentOpinion("");
                //     document.getElementById(`IdOfCommentArea`).value = "";
                //   }}
                className={`form-control me-2 b`}
                autoComplete="off"
                autoCorrect="off"
                rows="2"
                aria-describedby="regimeDescriptionHelp"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
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
        {/* <CustomLoader height={"80vh"} size={"30px"} /> */}
      </>
    );
  }
};

export default Conversation;
