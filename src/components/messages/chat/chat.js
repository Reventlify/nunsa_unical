import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "../chat/chat.module.css";
import { useState, useEffect, useCallback } from "react";
import { testChats } from "../../../testData/tesData";
import Conversation from "./conversation/conversation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { startWithCase } from "../../../utilities/text";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Four0Four from "../../error/404error";
import { api } from "../../../link/API";
import { authActions } from "../../../store/auth-slice";
import CustomLoader from "../../loader/customLoader/CustomLoader";
import { socket } from "../../../App";

const Chat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id, token } = useSelector((state) => state.auth.user);
  const { id } = useParams();
  const receiver_id = id.split("_");
  const receiverID = receiver_id[1];
  const [partner, setPartner] = useState();
  const [messages, setMessages] = useState([]);
  const [badStudent, setBadStudent] = useState(false);
  const [loadingP, setLoadingP] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  // const [uniqueObjects, setUniqueObjects] = useState(new Set());
  // const [id, setId] = useState(localStorage.getItem("nunsaChat"));

  // const userGotten = testChats.filter((person) => {
  //   if (person.chatId === id) {
  //     return person;
  //   }
  // });

  useEffect(() => {
    // const addObject = (newObject) => {
    //   setUniqueObjects((prevSet) => new Set([...prevSet, newObject]));
    // };

    socket.on("isTyping", (bool) => {
      // addObject(bool[0]);
      setIsTyping(bool);
    });
  }, []);
  // const setIsTypingHandler = (typing) => {
  //   setIsTyping(typing);
  // };
  const get_partner_datails_and_conversation_with_partner =
    useCallback(async () => {
      try {
        await fetch(`${api}/user/get_messages/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 200) {
            setPartner(data.partner);
            setMessages(data.msg);
            return setLoadingP(false);
          } else if (res.status === 401 || res.status === 403) {
            return dispatch(authActions.logout());
          } else if (res.status === 404) {
            setPartner(data.partner);
            setMessages(data.msg);
            return setLoadingP(false);
          } else {
            return setBadStudent(true);
          }
        });
      } catch (error) {
        return console.error(error.message);
      }
    }, [dispatch, id, token]);
  useEffect(() => {
    get_partner_datails_and_conversation_with_partner();
  }, [get_partner_datails_and_conversation_with_partner]);

  if (badStudent) {
    return <Four0Four />;
  } else {
    if (loadingP) {
      return (
        <>
          <div className={`bg-nunsa fixed-top`} style={{ width: "100%" }}>
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
                  <AccountCircleIcon
                    className="circle"
                    style={{
                      fontSize: "55px",
                      color: "#adadad",
                      backgroundColor: "white",
                    }}
                  />
                </div>
                <div className={`${classes.onOrOff}`}>
                  {/* <div className="bolder white" style={{ fontSize: "16px" }}>
                    {startWithCase(
                      `${partner.student_fname} ${partner.student_lname}`
                    )}
                  </div> */}
                  {/* <div className="white" style={{ color: "#f0f2f5" }}>
                  offline
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <CustomLoader height={"100vh"} size={20} />
        </>
      );
    } else {
      return (
        <>
          {/* // <div className={`${classes.chat}`}> */}
          <div className={`bg-nunsa fixed-top`} style={{ width: "100%" }}>
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
                  {partner.student_photo === null ? (
                    <AccountCircleIcon
                      className="circle"
                      style={{
                        fontSize: "55px",
                        color: "#adadad",
                        backgroundColor: "white",
                      }}
                    />
                  ) : (
                    <img
                      src={partner.student_photo}
                      alt="user"
                      width="55px"
                      height="55px"
                      className="round"
                    />
                  )}
                </div>
                <div className={`${classes.onOrOff}`}>
                  {/* <div> */}
                  <div
                    className={
                      isTyping ? "bolder white" : "bolder white centerDivV"
                    }
                    style={
                      isTyping
                        ? { fontSize: "16px" }
                        : { fontSize: "18px", height: "55px" }
                    }
                  >
                    {startWithCase(
                      `${partner.student_fname} ${partner.student_lname}`
                    )}
                  </div>
                  {isTyping ? (
                    <div className="white" style={{ color: "#f0f2f5" }}>
                      Typing...
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <Conversation
            receiverID={receiverID}
            senderID={user_id}
            loadingP={loadingP}
            messages={messages}
            // typing={setIsTypingHandler}
          />
        </>
      );
    }
  }
};

export default Chat;
