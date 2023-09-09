import { useCallback, useState } from "react";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { formatCompactNumber } from "../../utilities/number";
import classes from "../dashboard/studentDash.module.css";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../link/API";
import CustomLoader from "../loader/customLoader/CustomLoader";
import { authActions } from "../../store/auth-slice";
import { startWithCase } from "../../utilities/text";
import { postsActions } from "../../store/posts-slice";
import { useNavigate } from "react-router-dom";
import SeeMore from "../../utilities/seemore";

const StudentPost = ({ toggleComments, post, index, path }) => {
  const { token } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [studentOpinion, setStudentOpinion] = useState("");
  const [studentOpinionTo, setStudentOpinionTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  // const [display, setDisplay] = useState(false);

  const setAndOpen = () => {
    console.log(`setAndOpen clicked`);
    // dispatch(postsActions.setPostComments(post.post_id));
    toggleComments("bottom", true);
  };

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
            dispatch(postsActions.setPostComments(data.postComments));
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
  //   ,
  //   [dispatch, studentOpinion, studentOpinionTo, token, path]
  // );

  const showImg = () => {
    if (post.post_media !== null) {
      window.open(post.post_media, "_blank");
      // window.location.href = post.post_media;
    }
  };

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
  const toProfile = () => {
    navigate(`/student/profile/${post.student_id}`);
  };
  return (
    <div className={`${classes.post} margAuto boxShadow`}>
      {post.post_media && (
        <div className={`${classes.postImg}`}>
          <img
            onClick={showImg}
            className={`${classes.postImgr} hover`}
            src={post.post_media}
            width="100%"
            height="100%"
            alt="blog post image"
          />
        </div>
      )}
      <div className="blogText">
        {post.post_media && (
          <div className={`container mt-3 ${classes.opinion}`}>
            <div
              className={`${classes.like} container`}
              onClick={() => {
                if (loading) {
                  return;
                } else {
                  handleCommentSubmit("like", post.post_id, index);
                }
              }}
            >
              {post.liked === "yes" ? (
                <ThumbUpAltIcon className="hover nunsa" />
              ) : (
                <ThumbUpOffAltIcon className="hover" />
              )}
              &nbsp;
              <span className="">
                {formatCompactNumber(post.like_count)}
              </span>{" "}
            </div>
            <div className={`${classes.comment} centerDivH`}>
              <div onClick={toggleComments("bottom", true, post.post_id)}>
                {" "}
                <ChatBubbleOutlineIcon
                  className={post.commented === "yes" ? "hover nunsa" : "hover"}
                />
              </div>
              &nbsp;
              <span className="">
                {formatCompactNumber(post.comment_count)}
              </span>{" "}
            </div>
            <div
              className={`${classes.dislike} centerDivR container`}
              onClick={() => {
                if (loading) {
                  return;
                } else {
                  handleCommentSubmit("dislike", post.post_id, index);
                }
              }}
            >
              {post.disliked === "yes" ? (
                <ThumbDownAltIcon className="hover nunsa" />
              ) : (
                <ThumbDownOffAltIcon className="hover" />
              )}
              &nbsp;
              <span className="">
                {formatCompactNumber(post.dislike_count)}
              </span>{" "}
            </div>
          </div>
        )}
        <div className="container">
          <div className="container mt-3">
            <span className="bold" onClick={toProfile}>
              {startWithCase(post.student_name)}
            </span>
            &nbsp;
            <SeeMore text={post.post_text} />
            {!post.post_media && (
              <div className={`mt-3 ${classes.opinion}`}>
                <div
                  className={`${classes.like}`}
                  onClick={() => {
                    if (loading) {
                      return;
                    } else {
                      handleCommentSubmit("like", post.post_id, index);
                    }
                  }}
                >
                  {post.liked === "yes" ? (
                    <ThumbUpAltIcon className="hover nunsa" />
                  ) : (
                    <ThumbUpOffAltIcon className="hover" />
                  )}
                  &nbsp;
                  <span className="">
                    {formatCompactNumber(post.like_count)}
                  </span>{" "}
                </div>
                <div className={`${classes.comment} centerDivH`}>
                  <div onClick={toggleComments("bottom", true, post.post_id)}>
                    {" "}
                    <ChatBubbleOutlineIcon
                      className={
                        post.commented === "yes" ? "hover nunsa" : "hover"
                      }
                    />
                  </div>
                  &nbsp;
                  <span className="">
                    {formatCompactNumber(post.comment_count)}
                  </span>{" "}
                </div>
                <div
                  className={`${classes.dislike} centerDivR`}
                  onClick={() => {
                    if (loading) {
                      return;
                    } else {
                      handleCommentSubmit("dislike", post.post_id, index);
                    }
                  }}
                >
                  {post.disliked === "yes" ? (
                    <ThumbDownAltIcon className="hover nunsa" />
                  ) : (
                    <ThumbDownOffAltIcon className="hover" />
                  )}
                  &nbsp;
                  <span className="">
                    {formatCompactNumber(post.dislike_count)}
                  </span>{" "}
                </div>
              </div>
            )}
            <span className="mt-3 mb-3 block" style={{ fontSize: "12px" }}>
              {moment(post.post_date).format("h:mm A, MMM D, YYYY.")}
            </span>
          </div>
          <div
            className="mb-3 container"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <textarea
              // onFocus={() => {
              //   post.post = true;
              // }}
              placeholder="Add a comment..."
              className={`form-control onfocusOpinion ${classes.studOpinion}`}
              autoComplete="off"
              autoCorrect="off"
              id={`${post.post_id}IdOfPost`}
              onBlur={() => {
                document.getElementById(`${post.post_id}IdOfPost`).value = "";
              }}
              aria-describedby="regimeDescriptionHelp"
              onChange={(e) => {
                setStudentOpinion(e.target.value);
                setStudentOpinionTo(post.post_id);
              }}
              required
            />
            {loader(post.post_id)}
            {studentOpinion !== "" && studentOpinionTo !== "" && !loading ? (
              <div
                className="reventlify hover centerDiv"
                onClick={() => {
                  handleCommentSubmit("comment", post.post_id, index);
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
    </div>
  );
};

export default StudentPost;
