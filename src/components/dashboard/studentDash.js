import React, { useState, useEffect, useCallback } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import moment from "moment";
import StudentPost from "./studentPost";
import CreatePost from "../createPostButton";
import DashSearchAndNotifications from "./dashSearch&Not/dashSearch&Not";
import FullLoader from "../loader/fullLoader/FullLoader";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { api } from "../../link/API";
import classes from "../dashboard/studentDash.module.css";
import { postsActions } from "../../store/posts-slice";
import CommentDrawer from "./swipeableDrawer";

const StudentDash = ({ path }) => {
  const { token } = useSelector((state) => state.auth.user);
  const { generalPosts, classPosts, comments } = useSelector(
    (state) => state.posts
  );
  const [commentPersist, setPersist] = useState(comments);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleDrawer = (anchor, open, id) => (event) => {
    if (open) {
      dispatch(postsActions.setPostComments(id));
      // if (comments) {
      //   dispatch(postsActions.clearComments());
      // }
    }
    if (
      event &&
      event.type === "keydown" &&
      event.key
      // (event.key === "Tab" || event.key === "Shift")
    ) {
      // dispatch(postsActions.commentInsert(commentPersist));
      return;
    }
    display ? setDisplay(false) : setDisplay(true);
    return setState({ ...state, [anchor]: open });
  };

  // const toggleComments = (anchor, open) => {
  //   console.log(`toggle clicked`);
  //    toggleDrawer(anchor, open);
  // };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          `${api}/user/getposts/${path === "class" ? "yes" : "no"}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          // setPosts(data);
          if (path === "class") {
            dispatch(postsActions.classPostInsert(data));
          } else {
            dispatch(postsActions.postInsert(data));
          }
          setLoading(false);
        } else if (response.status === 401 || response.status === 403) {
          dispatch(authActions.logout());
        } else {
          const data = await response.json();
          // setPosts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getPosts();
  }, [token, path, dispatch]);

  const renderer = () => {
    if (path === "class") {
      return (
        <>
          {classPosts.length === 0 ? (
            <div className="blogText centerDiv fullscreen-30">
              <h1>Nothing to show...</h1>
            </div>
          ) : (
            <>
              {classPosts.map((post, i) => (
                <StudentPost
                  key={post.post_id}
                  toggleComments={toggleDrawer}
                  path={path}
                  post={post}
                  index={i}
                />
              ))}
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {generalPosts.length === 0 ? (
            <div className="blogText centerDiv fullscreen-30">
              <h1>Nothing to show...</h1>
            </div>
          ) : (
            <>
              {generalPosts.map((post, i) => (
                <StudentPost
                  key={post.post_id}
                  toggleComments={toggleDrawer}
                  path={path}
                  post={post}
                  index={i}
                />
              ))}
            </>
          )}
        </>
      );
    }
  };

  if (loading) {
    return <FullLoader />;
  }

  return (
    <>
      <DashSearchAndNotifications />
      <div className={`${classes.layHelp} ${classes.content} container`}>
        {renderer()}
      </div>
      <CreatePost path={path} />

      <SwipeableDrawer
        sx={() => (display ? { display: "block" } : { display: "none" })}
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {/* {listBottom("bottom")} */}
        <CommentDrawer anchor={"bottom"} toggleComments={toggleDrawer} />
      </SwipeableDrawer>
    </>
  );
};

export default StudentDash;
