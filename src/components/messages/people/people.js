import { useState, useEffect } from "react";
import classes from "../people/people.module.css";
import classes1 from "../chats/chats.module.css";
import { startWithCase } from "../../../utilities/text";
import { testPeople } from "../../../testData/tesData";
import BottomSpace from "../../bottomSpace";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const People = ({ navAction, openChat }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("Search NUNSA UNICAL...");
  const [people, setPeople] = useState(testPeople);
  return (
    <>
      <div className={classes.peopleHelper}>
        <div className={`container shadowB roboroboS edit mt-3`}>
          <form className={`d-flex`} role="search">
            <input
              className={`form-control me-2 b`}
              type="search"
              placeholder={search}
              aria-label="Search"
            />
            <button
              className="btn bottomShadow btnct btnct-nunsa"
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="mt-2">
            <button
              className={
                search !== "Search Class..."
                  ? "btn btn-sm btn-primary"
                  : "btn btn-sm btn-outline-primary"
              }
              onClick={() => {
                setSearch("Search NUNSA UNICAL...");
              }}
            >
              General
            </button>
            <button
              className={
                search === "Search Class..."
                  ? "btn btn-sm btn-primary ml-2"
                  : "btn btn-sm btn-outline-primary ml-2"
              }
              onClick={() => {
                setSearch("Search Class...");
              }}
            >
              &nbsp;Class&nbsp;
            </button>
          </div>
        </div>
      </div>
      <div className={classes.peopleDisplay}>
        {people.length === 0 ? (
          ""
        ) : (
          <>
            {people.map((user) => {
              return (
                <div
                  className={
                    user.userImg.length === 0
                      ? `${classes1.chat} container mt-1 hover`
                      : `${classes1.chat} container mt-2 hover`
                  }
                  key={user.chatId}
                  style={
                    user.userImg.length === 0 ? { paddingLeft: "0.35rem" } : {}
                  }
                  onClick={() => {
                    navigate(`/student/messages/chat/${user.chatId}`);
                  }}
                >
                  <div>
                    {user.userImg.length === 0 ? (
                      <AccountCircleIcon
                        style={{
                          fontSize: "55px",
                          color: "#adadad",
                          marginRight: "0.7rem",
                          padding: 0,
                        }}
                      />
                    ) : (
                      <img
                        className="circle mr-2"
                        src={user.userImg}
                        height="45px"
                        width="45px"
                      />
                    )}
                  </div>
                  <div
                    className={`${classes1.chatChild} ${classes1.seventy}  flex-column`}
                    style={
                      user.userImg.length === 0 ? { marginTop: "0.3rem" } : {}
                    }
                  >
                    <div className={`flex-row`}>
                      <div
                        className={`${classes1.chatChild} bold`}
                        style={{ fontSize: "18px" }}
                      >
                        {startWithCase(user.userName)}
                      </div>
                      {/* <div className="blogText" style={{ fontSize: "14px" }}>
                        {chat.lastMessage_time}
                      </div> */}
                    </div>
                    <div className={`${classes1.end}`}>
                      <div className={` blogText`} style={{ fontSize: "14px" }}>
                        {user.userClass}
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
    </>
  );
};

export default People;
