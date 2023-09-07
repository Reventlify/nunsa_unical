import React, { useCallback, useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { formatCompactNumber } from "../../utilities/number";
import classes from "../dashboard/studentDash.module.css";
import { startWithCase } from "../../utilities/text";
import BottomSpace from "../bottomSpace";
import CustomLoader from "../loader/customLoader/CustomLoader";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../link/API";
import { postsActions } from "../../store/posts-slice";
import { authActions } from "../../store/auth-slice";
import PostComments from "./postComponents/comments";

const CommentDrawer = ({ anchor, toggleComments, path }) => {
  const dispatch = useDispatch();
  const {
    postComments,
    comments,
    formerPostComments,
    classPosts,
    generalPosts,
  } = useSelector((state) => state.posts);
  const postP = path === "class" ? classPosts : generalPosts;
  const { token } = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [studentOpinion, setStudentOpinion] = useState("");
  const [studentOpinionTo, setStudentOpinionTo] = useState("");
  const [sent, setSent] = useState(false);
  const topRef = useRef(null); // Ref to the BottomSpace component

  const indexOfPost = postP.findIndex((post) => post.post_id === postComments);
  const handleCommentSubmit =
    // useCallback(
    async (action, id, i) => {
      // Handle comment submission here, using studentOpinion and studentOpinionTo
      // e.preventDefault();
      setLoading(true);
      try {
        await fetch(`${api}/user/posts/${id}/comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            studentOpinion,
            action: action,
            commentId: null,
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 200) {
            setStudentOpinion(""); // Clear the comment input
            setLoading(false);
            setSent(true);
            dispatch(postsActions.commentInsert(data.postComments));
            scrollToTop();
            if (path === "class") {
              return dispatch(
                postsActions.classPostEdit({
                  newData: data.post,
                  i,
                })
              );
            } else {
              return dispatch(
                postsActions.postEdit({
                  newData: data.post,
                  i,
                })
              );
            }
          } else if (res.status === 401 || res.status === 403) {
            return dispatch(authActions.logout());
          } else {
            setStudentOpinion(""); // Clear the comment input
            setStudentOpinionTo(""); // Clear the user ID
            return setLoading(false);
          }
        });
      } catch (error) {
        return console.error(error);
      }
    };

  const getComments = useCallback(async () => {
    setStudentOpinion("");
    setFetching(true);
    try {
      const response = await fetch(
        `${api}/user/posts/${postComments}/comment`,
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
        if (formerPostComments === null) {
          dispatch(postsActions.commentInsert(data));
          return setFetching(false);
        } else {
          return setFetching(false);
        }
      } else if (response.status === 401 || response.status === 403) {
        dispatch(authActions.logout());
      } else {
        // const data = await response.json();
        // setPosts(data);
        setFetching(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [token, dispatch, postComments]);
  useEffect(() => {
    // Scroll to the bottom of the conversation when messages change
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // if (formerPostComments === null) {
    getComments();
    // }
  }, [getComments]);

  const loader = (postID) => {
    if (loading && !sent && studentOpinionTo === postID) {
      return (
        <div className="reventlify hover centerDiv">
          <CustomLoader height={"auto"} size={"10"} />
        </div>
      );
    } else if (!loading && sent && studentOpinionTo === postID) {
      setTimeout(() => {
        setSent(false);
        setStudentOpinion(""); // Clear the comment input
        setStudentOpinionTo(""); // Clear the user ID
      }, 2500);
      return (
        <div className="nunsa hover centerDiv" style={{ fontSize: "25px" }}>
          ✔
        </div>
      );
    }
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        height: "80vh",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      className={`${classes.opinionMother}`}
      role="presentation"
      onKeyDown={toggleComments(anchor, false, null)}
    >
      <div className="container">
        <div className={`${classes.puller} centerDivH`}>
          <div className={`mt-2 float-top`}>
            <div className="centerDivH lineForHeader" style={{ width: "60px" }}>
              <div
                className="theLine"
                style={{ backgroundColor: "#adadad" }}
              ></div>
            </div>
          </div>
        </div>
        {/* <h5 className="mt-3 bold">Comments</h5> */}
      </div>
      <div className="container">
        <div className={`${classes.othersOpinion}`}>
          {/* Add an empty div with ref to scroll to */}
          <div ref={topRef}></div>
          {fetching ? (
            <CustomLoader height={"60vh"} size={18} />
          ) : (
            comments.map((comment, i) => {
              return (
                <PostComments
                  comment={comment}
                  key={comment.comment_id}
                  index={i}
                />
              );
            })
          )}
          <BottomSpace />
        </div>

        <div className={`bg-white ${classes.studOpinionDraw} `}>
          <div className="container fixed-bottom">
            <div className="" style={{ display: "flex", flexDirection: "row" }}>
              <textarea
                placeholder="Add a comment..."
                className={`form-control onfocusOpinion ${classes.studOpinion}`}
                autoComplete="off"
                autoCorrect="off"
                id={`${postComments}IdOfPost`}
                value={studentOpinion}
                // onBlur={() => {
                //   document.getElementById(`${postComments}IdOfPost`).value = "";
                // }}
                aria-describedby="regimeDescriptionHelp"
                onChange={(e) => {
                  setStudentOpinion(e.target.value);
                  setStudentOpinionTo(postComments);
                }}
                required
              />
              {loader(postComments)}
              {studentOpinion !== "" && studentOpinionTo !== "" && !loading ? (
                <div
                  className="reventlify hover centerDiv"
                  onClick={() => {
                    document.getElementById(`${postComments}IdOfPost`).value =
                      "";
                    handleCommentSubmit("comment", postComments, indexOfPost);
                  }}
                >
                  Post
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <BottomSpace />
      </div>
    </Box>
  );
};

export default CommentDrawer;
