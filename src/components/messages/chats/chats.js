import { useState, useEffect, useCallback } from "react";
import classes from "../chats/chats.module.css";
import truncate from "lodash.truncate";
import ChatIcon from "@mui/icons-material/Chat";
import { startWithCase } from "../../../utilities/text";
import { testChats } from "../../../testData/tesData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BottomSpace from "../../bottomSpace";
import { useNavigate } from "react-router-dom";
import { api } from "../../../link/API";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "../../loader/customLoader/CustomLoader";
import { authActions } from "../../../store/auth-slice";
import moment from "moment";

const Chats = ({ navAction }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id, token } = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState(testChats);

  const formatDateGroupTitle = (date) => {
    const today = moment().format("MMM D, YYYY");
    const yesterday = moment().subtract(1, "days").format("MMM D, YYYY");
    const dateEdit = moment(date).format("MMM D, YYYY");

    if (dateEdit === today) {
      return moment(date).format("h:mm A");
    } else if (dateEdit === yesterday) {
      return "Yesterday";
    } else {
      return moment(date).format("M/D/Y");
    }
  };

  const getConversations = useCallback(async () => {
    try {
      await fetch(`${api}/user/get_conversations`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setChats(data);
          return setLoading(false);
        } else if (res.status === 401 || res.status === 403) {
          return dispatch(authActions.logout());
        } else {
          return setLoading(false);
        }
      });
    } catch (error) {
      return console.error(error.message);
    }
  }, [dispatch, token]);
  useEffect(() => {
    getConversations();
  }, [getConversations]);
  return (
    <>
      <div className={classes.chatHelper}>
        {loading ? (
          <CustomLoader height={"90vh"} size={20} />
        ) : chats.length === 0 ? (
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
                  key={chat.conversation_id}
                  style={
                    chat.message_media === null
                      ? { paddingLeft: "0.35rem" }
                      : {}
                  }
                  onClick={() => {
                    navigate(
                      `/student/messages/chat/${user_id}_${chat.other_user_id}`
                    );
                  }}
                >
                  <div>
                    {chat.other_user_photo === null ? (
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
                        src={chat.other_user_photo}
                        height="55px"
                        width="55px"
                      />
                    )}
                  </div>
                  <div
                    className={`${classes.chatChild} ${classes.seventy}  flex-column`}
                    style={
                      chat.message_media === null ? { marginTop: "0.3rem" } : {}
                    }
                  >
                    <div className={`flex-row`}>
                      <div
                        className={`${classes.chatChild} bold`}
                        style={{ fontSize: "18px" }}
                      >
                        {startWithCase(
                          `${chat.other_user_fname} ${chat.other_user_lname}`
                        )}
                      </div>
                      <div className="blogText" style={{ fontSize: "14px" }}>
                        {formatDateGroupTitle(chat.sent_at)}
                      </div>
                    </div>
                    <div className={`${classes.end}`}>
                      <div className={` blogText`} style={{ fontSize: "14px" }}>
                        {truncate(chat.message_text, {
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
