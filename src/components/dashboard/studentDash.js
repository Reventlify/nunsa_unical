import classes from "../dashboard/studentDash.module.css";
import Box from "@mui/material/Box";
import truncate from "lodash.truncate";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DashSearchAndNotifications from "./dashSearch&Not/dashSearch&Not";
import BottomSpace from "../bottomSpace";
import { formatCompactNumber } from "../../utilities/number";
import CreatePost from "../createPostButton";
import { testComments, testPost, testReplies } from "../../testData/tesData";
import { startWithCase } from "../../utilities/text";

const StudentDash = ({ searchWhere }) => {
  const [posts, setPosts] = useState(testPost);
  const [comments, setComments] = useState(testComments);
  const [replies, setReplies] = useState(testReplies);
  const [details, setDetails] = useState("");
  const [studentOpinion, setStudentOpinion] = useState("");
  const [studentOpinionTo, setStudentOpinionTo] = useState("");
  const [display, setDisplay] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open, stuff) => (event) => {
    setDetails(stuff);
    if (
      event &&
      event.type === "keydown" &&
      event.key
      // (event.key === "Tab" || event.key === "Shift")
    ) {
      return setDetails(details);
    }
    display ? setDisplay(false) : setDisplay(true);
    setState({ ...state, [anchor]: open });
  };

  // helps show more
  const newArr = [...posts];
  // show more post text
  const seeMore = (index) => {
    if (!newArr[index].showComments) {
      newArr[index].showComments = true;
      setPosts(newArr);
    } else {
      newArr[index].showComments = false;
      setPosts(newArr);
    }
  };
  // helps show more
  const newArrC = [...comments];
  // show more post text
  const seeMoreReplies = (index) => {
    if (!newArrC[index].showReply) {
      newArrC[index].showReply = true;
      setComments(newArrC);
    } else {
      newArrC[index].showReply = false;
      setComments(newArrC);
    }
  };

  // actuall post text
  const postJargons = (index) => {
    if (!posts[index].showComments) {
      return `${truncate(posts[index].postText, {
        length: 55,
        // separator: /,? +/,
      })}`;
    } else {
      return `${posts[index].postText}`;
    }
  };
  // actuall post text
  const postJargonsGreater = (index) => {
    if (!posts[index].showComments) {
      return `${truncate(posts[index].postText, {
        length: 250,
        // separator: /,? +/,
      })}`;
    } else {
      return `${posts[index].postText}`;
    }
  };

  const commentFilter = (id) => {
    let newComments = comments.filter((item) => {
      if (item.postId === id) {
        return item;
      }
    });

    return newComments;
  };
  const commentFilterC = (id) => {
    // let om =  comments.map(object => object.commentId).indexOf('c');
    let realIndex = comments.findIndex((object) => {
      return object.commentId === id;
    });

    return realIndex;
  };

  const replyFilter = (id) => {
    let newReplies = replies.filter((item) => {
      if (item.commentId === id) {
        return item;
      }
    });

    return newReplies;
  };

  // actuall post text
  const replyJargons = (id) => {
    let realIndex = commentFilterC(id);
    if (!comments[realIndex].showReply) {
      return (
        <span
          className="nunsa block container hover"
          onClick={() => {
            seeMoreReplies(realIndex);
          }}
        >
          see replies <KeyboardArrowDownIcon />
        </span>
      );
    } else {
      return (
        <>
          <span
            className="nunsa block container hover"
            onClick={() => {
              seeMoreReplies(realIndex);
            }}
          >
            hide replies <KeyboardArrowUpIcon />
          </span>
          {replyFilter(id).map((reply) => {
            return (
              <div
                key={reply.replyId}
                className={`${classes.notification} mt-3`}
              >
                <div className={`${classes.commIMG}`}>
                  <img
                    src={reply.replierImg}
                    alt="user"
                    width="30px"
                    height="30px"
                    className="round"
                  />
                </div>
                <div className={`${classes.commText} paddFull-1 hover ml-1`}>
                  <span className="block">
                    <span className="bold">
                      {startWithCase(reply.replierName)}
                    </span>
                    <br />
                    {reply.reply}
                  </span>
                  <span className={`block ${classes.notTime}`}>
                    <span className="nunsa">{reply.replyTime}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </>
      );
    }
  };
  const listBottom = (anchor) => (
    <Box
      sx={{
        height: "80vh",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
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
        <h5 className="mt-3 bold">Comments</h5>
      </div>
      <div className="container">
        <div className={`${classes.othersOpinion}`}>
          {commentFilter(details).map((comment, index) => {
            return (
              <div
                className={`${classes.notification} mt-3`}
                key={comment.commentId}
              >
                <div className={`${classes.commIMG}`}>
                  <img
                    src={comment.commenterImg}
                    alt="user"
                    width="40px"
                    height="40px"
                    className="round"
                  />
                </div>
                <div className={`hover  ml-2`}>
                  <div className={`${classes.commText} paddFull-1`}>
                    <span className="block">
                      <span className="bold">
                        {startWithCase(comment.commenterName)}
                      </span>
                      <br />
                      {comment.comment}
                    </span>
                    <span className={`block ${classes.notTime}`}>
                      <span className="nunsa">{comment.commentTime}</span>
                    </span>
                  </div>
                  <div
                    className={`container mt-2 blogText ${classes.likeandReply}`}
                  >
                    <div>
                      <ThumbUpOffAltIcon />
                      &nbsp;
                      <span className=" hover">
                        {formatCompactNumber(comment.commentLikes)}
                      </span>
                    </div>{" "}
                    <div className="ml-2 hover">Reply</div>
                    <div className="ml-2 ">
                      <ThumbDownOffAltIcon />
                      &nbsp;
                      <span className=" hover">{comment.commentDisLikes}</span>
                    </div>{" "}
                  </div>
                  {replyFilter(comment.commentId).length > 0
                    ? replyJargons(comment.commentId)
                    : ""}
                </div>
              </div>
            );
          })}
          <BottomSpace />
        </div>

        <div className={`float-bottom ${classes.studOpinionDraw}`}>
          <div className="" style={{ display: "flex", flexDirection: "row" }}>
            <textarea
              placeholder="Add a comment..."
              id="IdOfCommentArea"
              onBlur={() => {
                setStudentOpinion("");
                document.getElementById(`IdOfCommentArea`).value = "";
              }}
              className={`form-control onfocusOpinion ${classes.studOpinion}`}
              autoComplete="off"
              autoCorrect="off"
              aria-describedby="regimeDescriptionHelp"
              // value={regimeDescription}
              onChange={(e) => setStudentOpinion(e.target.value)}
              required
            />
            {studentOpinion !== "" ? (
              <div className="reventlify hover centerDiv">Post</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <DashSearchAndNotifications search={searchWhere} />
      <div className={`${classes.layHelp} ${classes.content} container`}>
        {posts.map((post, index) => {
          if (post.postImg.length > 0) {
            return (
              <div
                key={post.postId}
                className={`${classes.post} margAuto boxShadow`}
              >
                <div className={`${classes.postImg}`}>
                  <img
                    src={post.postImg}
                    width="100%"
                    height="100%"
                    alt="blog post image"
                  />
                </div>
                <div className="blogText">
                  <div className={`container mt-3 ${classes.opinion}`}>
                    <div className={`${classes.like} container`}>
                      <ThumbUpAltIcon className="hover nunsa" />
                      &nbsp;
                      <span className="">
                        {formatCompactNumber(post.postLikes)}
                      </span>{" "}
                    </div>
                    <div className={`${classes.comment} centerDivH`}>
                      <div onClick={toggleDrawer("bottom", true, post.postId)}>
                        {" "}
                        <ChatBubbleOutlineIcon className="hover" />
                      </div>
                      &nbsp;
                      <span className="">
                        {formatCompactNumber(commentFilter(post.postId).length)}
                      </span>{" "}
                    </div>
                    <div className={`${classes.dislike} centerDivR container`}>
                      <ThumbDownOffAltIcon className="hover" />
                      &nbsp;
                      <span className="">
                        {formatCompactNumber(post.postDisLikes)}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="container">
                    <p className="container mt-3 blogText">
                      <span className="bold">
                        {startWithCase(post.posterName)}
                      </span>
                      &nbsp;
                      {postJargons(index)}
                      <br />
                      {post.postText.length > 55 ? (
                        <span
                          className={`hover ${classes.blogFoot} blogFoot`}
                          onClick={() => {
                            seeMore(index);
                          }}
                        >
                          {post.showComments ? "hide" : "more"}
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        className={`mt-2 block ${classes.blogFoot}`}
                        style={{ fontSize: "12px" }}
                      >
                        {post.postTime}
                      </span>
                    </p>

                    <div
                      className="mb-3 container"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <textarea
                        onFocus={() => {
                          post.post = true;
                        }}
                        placeholder="Add a comment..."
                        className={`form-control onfocusOpinion ${classes.studOpinion}`}
                        autoComplete="off"
                        autoCorrect="off"
                        id={`${post.postId}IdOfPost`}
                        onBlur={() => {
                          setStudentOpinion("");
                          setStudentOpinionTo("");
                          post.post = false;
                          document.getElementById(
                            `${post.postId}IdOfPost`
                          ).value = "";
                        }}
                        aria-describedby="regimeDescriptionHelp"
                        onChange={(e) => {
                          setStudentOpinion(e.target.value);
                          setStudentOpinionTo(post.postId);
                        }}
                        required
                      />
                      {posts[index].post &&
                      studentOpinion !== "" &&
                      studentOpinionTo !== "" ? (
                        <div
                          className="reventlify hover centerDiv"
                          key={`${post.postId}post`}
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
          } else {
            return (
              <div
                key={post.postId}
                className={`${classes.post} margAuto boxShadow`}
              >
                <div className="blogText">
                  <div className="container">
                    <div className="container mt-3 blogText">
                      <span className="bold">
                        {startWithCase(post.posterName)}
                      </span>
                      &nbsp;
                      {postJargonsGreater(index)}
                      <br />
                      {post.postText.length > 250 ? (
                        <span
                          className={`hover ${classes.blogFoot} blogFoot`}
                          onClick={() => {
                            seeMore(index);
                          }}
                        >
                          {post.showComments ? "hide" : "more"}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={`mt-3 ${classes.opinion}`}>
                      <div className={`${classes.like} container`}>
                        <ThumbUpAltIcon className="hover nunsa" />
                        &nbsp;
                        <span className="">
                          {formatCompactNumber(post.postLikes)}
                        </span>{" "}
                      </div>
                      <div className={`${classes.comment} centerDivH`}>
                        <div
                          onClick={toggleDrawer("bottom", true, post.postId)}
                        >
                          {" "}
                          <ChatBubbleOutlineIcon className="hover" />
                        </div>
                        &nbsp;
                        <span className="">
                          {formatCompactNumber(
                            commentFilter(post.postId).length
                          )}
                        </span>{" "}
                      </div>
                      <div
                        className={`${classes.dislike} centerDivR container`}
                      >
                        <ThumbDownOffAltIcon className="hover" />
                        &nbsp;
                        <span className="">
                          {formatCompactNumber(post.postDisLikes)}
                        </span>{" "}
                      </div>
                    </div>
                    <span
                      className={`mt-3 mb-3 container block ${classes.blogFoot}`}
                      style={{ fontSize: "12px" }}
                    >
                      {post.postTime}
                    </span>

                    <div
                      className="mb-3 container"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <textarea
                        onFocus={() => {
                          post.post = true;
                        }}
                        placeholder="Add a comment..."
                        className={`form-control onfocusOpinion ${classes.studOpinion}`}
                        autoComplete="off"
                        autoCorrect="off"
                        id={`${post.postId}IdOfPost`}
                        onBlur={() => {
                          setStudentOpinion("");
                          setStudentOpinionTo("");
                          post.post = false;
                          document.getElementById(
                            `${post.postId}IdOfPost`
                          ).value = "";
                        }}
                        aria-describedby="regimeDescriptionHelp"
                        onChange={(e) => {
                          setStudentOpinion(e.target.value);
                          setStudentOpinionTo(post.postId);
                        }}
                        required
                      />
                      {posts[index].post &&
                      studentOpinion !== "" &&
                      studentOpinionTo !== "" ? (
                        <div
                          className="reventlify hover centerDiv"
                          key={`${post.postId}post`}
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
          }
        })}
      </div>

      <CreatePost />

      <SwipeableDrawer
        sx={() => (display ? { display: "block" } : { display: "none" })}
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {listBottom("bottom")}
      </SwipeableDrawer>
    </>
  );
};

export default StudentDash;
