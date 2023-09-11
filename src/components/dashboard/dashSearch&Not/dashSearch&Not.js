import classes from "../studentDash.module.css";
import president from "../../../images/president.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useCallback, useState } from "react";
import { api } from "../../../link/API";
import { authActions } from "../../../store/auth-slice";
import { postsActions } from "../../../store/posts-slice";

const DashSearchAndNotifications = ({ search }) => {
  const { pathname } = useLocation();
  const { token, level } = useSelector((state) => state.auth.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();

  const searchPosts =
    // useCallback(
    async (e) => {
      console.log(`search for: ${searchTerm}`);
      e.preventDefault();
      setSearching(true);
      try {
        const response = await fetch(`${api}/user/searchposts/${searchTerm}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          if (pathname.slice(-5).toLowerCase() === "class") {
            dispatch(postsActions.classPostInsert(data));
          } else {
            dispatch(postsActions.postInsert(data));
          }
          return setSearching(false);
        } else if (response.status === 401 || response.status === 403) {
          dispatch(authActions.logout());
        } else {
          // const data = await response.json();
          setSearching(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
  //   ,
  //   [token, dispatch]
  // );

  return (
    <div className={`${classes.sideBar}`}>
      <div className="container">
        <div className={`container ${classes.foc} shadowB roboroboS edit`}>
          <form className={`d-flex`} role="search" onSubmit={searchPosts}>
            <input
              className={`form-control me-2 b`}
              type="search"
              placeholder={`Search ${
                pathname.slice(-5).toLowerCase() === "class"
                  ? `Yr${level.slice(0, 1)} class`
                  : "NUNSA UNICAL"
              }...`}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
            />
            <button
              className={
                searchTerm.length < 1 || searching
                  ? "btnct btn btn-secondary"
                  : "btn bottomShadow btnct btnct-nunsa"
              }
              type="submit"
              disabled={searchTerm.length < 1 || searching ? true : false}
            >
              {searching ? (
                "..."
              ) : (
                <i className="fa-solid fa-magnifying-glass"></i>
              )}
            </button>
          </form>
        </div>

        <div className={`${classes.sidebarDis} container mt-2`}>
          <div className="lineForHeader">
            <h4 className="bolder">Notifications</h4>
            <div className="theLine"></div>
          </div>
          {/* notifications */}
          {/* <div className={`${classes.notP} mt-3 container bg-white`}>
            <div className={`${classes.notification}`}>
              <div className={`${classes.notIMG}`}>
                <img
                  src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.com/assets/img/users/278d0ea32774f18ff37d2d58a4d70189.jpg?1683009009"
                  alt="user"
                  width="60px"
                  height="100%"
                  className="round"
                />
              </div>
              <div className={`${classes.notText} hover blogText`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span> made a new post
                  recently.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
            </div>
          </div>
          <div className={`${classes.notP} mt-3 container bg-white`}>
            <div className={`${classes.notification}`}>
              <div className={`${classes.notIMG}`}>
                <img
                  src={president}
                  alt="user"
                  width="60px"
                  height="100%"
                  className="round"
                />
              </div>
              <div className={`${classes.notText} hover blogText`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span> made a new post
                  recently.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
            </div>
          </div>
          <div className={`${classes.notP} mt-3 container bg-white`}>
            <div className={`${classes.notification}`}>
              <div className={`${classes.notIMG}`}>
                <img
                  src={president}
                  alt="user"
                  width="60px"
                  height="100%"
                  className="round"
                />
              </div>
              <div className={`${classes.notText} hover blogText`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span> made a new post
                  recently.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashSearchAndNotifications;
