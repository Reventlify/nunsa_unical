import { useState, useEffect, useCallback } from "react";
import classes from "../people/people.module.css";
import classes1 from "../chats/chats.module.css";
import { startWithCase } from "../../../utilities/text";
import BottomSpace from "../../bottomSpace";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import CustomLoader from "../../loader/customLoader/CustomLoader";
import { api } from "../../../link/API";

const People = ({ navAction, openChat }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id } = useSelector((state) => state.auth.user);
  const [search, setSearch] = useState("Search NUNSA UNICAL...");
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState("");
  const [searchfor, setSearchFor] = useState("");

  const searchForStudents = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    setSearching(true);
    try {
      await fetch(`${api}/user/search_for_students/${searchfor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setPeople(data);
          setSearching(false);
          return setLoading(false);
        } else if (res.status === 401 || res.status === 403) {
          return dispatch(authActions.logout());
        } else {
          setPeople(data);
          setSearching(false);
          return setLoading(false);
        }
      });
    } catch (error) {
      return console.error(error.message);
    }
  };

  const getStudents = useCallback(async () => {
    try {
      await fetch(`${api}/user/get_students/${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setPeople(data);
          return setLoading(false);
        } else if (res.status === 401 || res.status === 403) {
          return dispatch(authActions.logout());
        } else {
          setPeople(data);
          return setLoading(false);
        }
      });
    } catch (error) {
      return console.error(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  return (
    <>
      <div className={classes.peopleHelper}>
        <div className={`container shadowB roboroboS edit mt-3`}>
          <form className={`d-flex`} onSubmit={searchForStudents}>
            <input
              className={`form-control me-2 b`}
              type="text"
              placeholder={search}
              onChange={(e) => setSearchFor(e.target.value)}
              // aria-label="Search"
            />
            <button
              className={
                searchfor.length === 0 || searching
                  ? "btnct btn btn-secondary"
                  : "btn bottomShadow btnct btnct-nunsa"
              }
              type="submit"
              disabled={
                searchfor.length === 0 || searching === 0 ? true : false
              }
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
        {loading ? <CustomLoader height={"50vh"} size={"20"} /> : ""}
      </div>
      {!loading ? (
        <div className={classes.peopleDisplay}>
          {typeof people !== "object" || people.length === 0 ? (
            <div className="centerDiv fullscreen-30 container">
              <h4 className="blogText center">{people}</h4>
            </div>
          ) : (
            <>
              {people.map((user) => {
                return (
                  <div
                    className={
                      user.student_photo === null
                        ? `${classes1.chat} container mt-1 hover`
                        : `${classes1.chat} container mt-2 hover`
                    }
                    key={user.student_id}
                    style={
                      user.student_photo === null
                        ? { paddingLeft: "0.35rem" }
                        : {}
                    }
                    onClick={() => {
                      navigate(
                        `/student/messages/chat/${user_id}_${user.student_id}`
                      );
                    }}
                  >
                    <div>
                      {user.student_photo === null ? (
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
                          src={user.student_photo}
                          height="45px"
                          width="45px"
                        />
                      )}
                    </div>
                    <div
                      className={`${classes1.chatChild} ${classes1.seventy}  flex-column`}
                      style={
                        user.student_photo === null
                          ? { marginTop: "0.3rem" }
                          : {}
                      }
                    >
                      <div className={`flex-row`}>
                        <div
                          className={`${classes1.chatChild} bold`}
                          style={{ fontSize: "18px" }}
                        >
                          {startWithCase(
                            `${user.student_fname} ${user.student_lname}`
                          )}
                        </div>
                        {/* <div className="blogText" style={{ fontSize: "14px" }}>
                            {chat.lastMessage_time}
                          </div> */}
                      </div>
                      {/* <div className={`${classes1.end}`}>
                        <div
                          className={` blogText`}
                          style={{ fontSize: "14px" }}
                        >
                          {user.userClass}
                        </div>
                        <div className="blogText"></div>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <BottomSpace />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default People;
