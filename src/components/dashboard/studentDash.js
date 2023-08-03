import classes from "../dashboard/studentDash.module.css";
import Box from "@mui/material/Box";
import truncate from "lodash.truncate";
import president from "../../images/president.jpg";
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
import five from "../../images/five.jpg";
import six from "../../images/six.jpg";
import seven from "../../images/seven.jpg";

const StudentDash = ({ searchWhere }) => {
  const [posts, setPosts] = useState([
    {
      postId: "1",
      posterId: "a",
      posterName: "Angelina Jolie",
      post: false,
      showComments: false,
      postImg: five,
      postText: `
      The President of NUNSA UNICAL and his Executives,
      recognizing the importance of staying technologically
      up-to-date, took a proactive step by commissioning a
      developer to create a custom web application for the
      association. Understanding that the digital landscape
      plays a crucial role in modernizing organizations, the
      President's forward-thinking approach aimed to ensure
      that NUNSA would not lag behind in technology. By
      investing in this web app, the association can
      streamline its operations, enhance communication with
      members, and provide more efficient services to the
      community they serve. This strategic move demonstrates
      the President's commitment to keeping NUNSA relevant and
      responsive in the ever-evolving digital age.`,
      postLikes: 563,
      postDisLikes: 23,
      postComments: 3,
      postTime: "August 10, 2023",
      liked: true,
    },
    {
      postId: "2",
      posterId: "b",
      posterName: "Daenarys Targayrn",
      post: false,
      showComments: false,
      postImg: six,
      postText: `
      The President of NUNSA UNICAL and his Executives,
      recognizing the importance of staying technologically
      up-to-date, took a proactive step by commissioning a
      developer to create a custom web application for the
      association. Understanding that the digital landscape
      plays a crucial role in modernizing organizations, the
      President's forward-thinking approach aimed to ensure
      that NUNSA would not lag behind in technology. By
      investing in this web app, the association can
      streamline its operations, enhance communication with
      members, and provide more efficient services to the
      community they serve. This strategic move demonstrates
      the President's commitment to keeping NUNSA relevant and
      responsive in the ever-evolving digital age.`,
      postLikes: 1000,
      postDisLikes: 363,
      postComments: 0,
      postTime: "August 9, 2023",
    },
    {
      postId: "3",
      posterId: "c",
      posterName: "Justina Lindsay",
      post: false,
      showComments: false,
      postImg: seven,
      postText: `
      The President of NUNSA UNICAL and his Executives,
      recognizing the importance of staying technologically
      up-to-date, took a proactive step by commissioning a
      developer to create a custom web application for the
      association. Understanding that the digital landscape
      plays a crucial role in modernizing organizations, the
      President's forward-thinking approach aimed to ensure
      that NUNSA would not lag behind in technology. By
      investing in this web app, the association can
      streamline its operations, enhance communication with
      members, and provide more efficient services to the
      community they serve. This strategic move demonstrates
      the President's commitment to keeping NUNSA relevant and
      responsive in the ever-evolving digital age.`,
      postLikes: 5,
      postDisLikes: 100,
      postComments: 0,
      postTime: "August 8, 2023",
    },
  ]);
  const [comments, setComments] = useState([
    {
      commentId: "1a",
      postid: "1",
      commenterId: "b",
      commenterName: "Obe Precious",
      comment: "",
      commentLikes: "",
      commentDisLikes: "563",
      commentReplies: "",
      commentTime: "",
    },
  ]);
  const [replies, setReplies] = useState([
    {
      post: false,
      action: "reply",
      postid: "1",
      postImg: "",
      postText: "",
      replyLikes: "",
      replyDisLikes: "",
      replyTime: "",
    },
  ]);
  const [details, setDetails] = useState("");
  const [focus, setFocus] = useState("");
  const [studentOpinion, setStudentOpinion] = useState("");
  const [studentOpinionTo, setStudentOpinionTo] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayReplies, setDisplayReplies] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleReplies = () => {
    displayReplies ? setDisplayReplies(false) : setDisplayReplies(true);
  };
  const toggleDrawer = (anchor, open, stuff) => (event) => {
    setDetails(stuff);
    if (
      event &&
      event.type === "keydown" &&
      event.key
      // (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
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
          {/* <h5>{details}</h5> */}
          <div className={`${classes.notification} mt-3`}>
            <div className={`${classes.commIMG}`}>
              <img
                src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.com/assets/img/users/278d0ea32774f18ff37d2d58a4d70189.jpg?1683009009"
                alt="user"
                width="40px"
                height="40px"
                className="round"
              />
            </div>
            <div className={`hover blogText ml-2`}>
              <div className={`${classes.commText} paddFull-1`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span>
                  <br />
                  Eddy is good
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
              <div className={`container mt-2 ${classes.likeandReply}`}>
                <div>
                  Like-<span className="reventlify hover">12</span>
                </div>{" "}
                <div className="ml-2 hover">Reply</div>
              </div>
              {displayReplies ? (
                <>
                  <span
                    className="nunsa block container hover"
                    onClick={toggleReplies}
                  >
                    hide replies <KeyboardArrowUpIcon />
                  </span>
                  <div className={`${classes.notification} mt-3`}>
                    <div className={`${classes.commIMG}`}>
                      <img
                        src={president}
                        alt="user"
                        width="30px"
                        height="30px"
                        className="round"
                      />
                    </div>
                    <div
                      className={`${classes.commText} paddFull-1 hover blogText ml-1`}
                    >
                      <span className="block">
                        <span className="bold">Eze Chinaza</span>
                        <br />
                        The President of NUNSA UNICAL and his Executives
                      </span>
                      <span className={`block ${classes.notTime}`}>
                        <span className="nunsa">17 hours ago</span>
                      </span>
                    </div>
                  </div>
                  <div className={`${classes.notification} mt-3`}>
                    <div className={`${classes.commIMG}`}>
                      <img
                        src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.com/assets/img/users/278d0ea32774f18ff37d2d58a4d70189.jpg?1683009009"
                        alt="user"
                        width="30px"
                        height="30px"
                        className="round"
                      />
                    </div>
                    <div
                      className={`${classes.commText} paddFull-1 hover blogText ml-1`}
                    >
                      <span className="block">
                        <span className="bold">Eze Chinaza</span>
                        <br />
                        The President of NUNSA UNICAL and his Executives,
                        recognizing the importance of staying technologically
                        up-to-date, took a proactive step by commissioning a
                        developer to create a custom web application for the
                        association. Understanding that the digital landscape
                        plays a crucial role in modernizing organizations, the
                        President's forward-thinking approach aimed to ensure
                        that NUNSA would not lag behind in technology. By
                        investing in this web app, the association can
                        streamline its operations, enhance communication with
                        members, and provide more efficient services to the
                        community they serve. This strategic move demonstrates
                        the President's commitment to keeping NUNSA relevant and
                        responsive in the ever-evolving digital age.
                      </span>
                      <span className={`block ${classes.notTime}`}>
                        <span className="nunsa">17 hours ago</span>
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <span
                  className="nunsa block container hover"
                  onClick={toggleReplies}
                >
                  see replies <KeyboardArrowDownIcon />
                </span>
              )}
            </div>
          </div>
          <div className={`${classes.notification} mt-3`}>
            <div className={`${classes.commIMG} hover`}>
              <img
                src={president}
                alt="user"
                width="40px"
                height="40px"
                className="round"
              />
            </div>

            <div className={`hover blogText ml-2`}>
              <div className={`${classes.commText} paddFull-1`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span>
                  <br />
                  The President of NUNSA UNICAL and his Executives
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
              <div className={`container mt-2 ${classes.likeandReply}`}>
                <div>
                  Like-<span className="reventlify hover">2</span>
                </div>{" "}
                <div className="ml-2 hover">Reply</div>
              </div>
            </div>
          </div>
          <div className={`${classes.notification} mt-3`}>
            <div className={`${classes.commIMG}`}>
              <img
                src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.com/assets/img/users/278d0ea32774f18ff37d2d58a4d70189.jpg?1683009009"
                alt="user"
                width="40px"
                height="40px"
                className="round"
              />
            </div>

            <div className={`hover blogText ml-2`}>
              <div className={`${classes.commText} paddFull-1`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span>
                  <br />
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
              <div className={`container mt-2 ${classes.likeandReply}`}>
                <div>
                  Like-<span className="reventlify hover">200</span>
                </div>{" "}
                <div className="ml-2 hover">Reply</div>
              </div>
            </div>
          </div>
          <BottomSpace />
        </div>

        <div className={`float-bottom ${classes.studOpinionDraw}`}>
          <textarea
            placeholder="Add a comment..."
            className={`form-control onfocusOpinion ${classes.studOpinion}`}
            autoComplete="off"
            autoCorrect="off"
            id="regimeDescription"
            aria-describedby="regimeDescriptionHelp"
            // value={regimeDescription}
            // onChange={(e) => setRegimeDescription(trim(e.target.value))}
            required
          />
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <DashSearchAndNotifications search={searchWhere} />
      <div className={`${classes.layHelp} ${classes.content} container`}>
        {posts.map((post, index) => {
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
                    <span className="">{post.postLikes}</span>{" "}
                  </div>
                  <div className={`${classes.comment} centerDivH`}>
                    <div onClick={toggleDrawer("bottom", true, "Eze Chinaza")}>
                      {" "}
                      <ChatBubbleOutlineIcon className="hover" />
                    </div>
                    &nbsp;
                    <span className="">{post.postComments}</span>{" "}
                  </div>
                  <div className={`${classes.dislike} centerDivR container`}>
                    <ThumbDownOffAltIcon className="hover" />
                    &nbsp;
                    <span className="">{post.postDisLikes}</span>{" "}
                  </div>
                </div>
                <div className="container">
                  <p className="container mt-3 blogText">
                    <span className="bold">{post.posterName}</span>&nbsp;
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
        })}
      </div>
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
