import React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { formatCompactNumber } from "../../utilities/number";
import classes from "../dashboard/studentDash.module.css";
import { startWithCase } from "../../utilities/text";
import BottomSpace from "../bottomSpace";

const CommentDrawer = ({ anchor, open, toggleDrawer, comments, replies }) => {
  const seeMoreReplies = (index) => {
    // Handle toggling replies here
  };

  return (
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
          {comments.map((comment, index) => {
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
                <div className="hover ml-2">
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
                      <span className="hover">
                        {formatCompactNumber(comment.commentLikes)}
                      </span>
                    </div>
                    <div className="ml-2 hover">Reply</div>
                    <div className="ml-2">
                      <ThumbDownOffAltIcon />
                      &nbsp;
                      <span className="hover">
                        {formatCompactNumber(comment.commentDisLikes)}
                      </span>
                    </div>
                  </div>
                  {comment.replyCount > 0 ? (
                    <span
                      className="block container hover"
                      onClick={() => seeMoreReplies(index)}
                    >
                      {comment.showReplies ? "Hide" : "See"} replies{" "}
                      {comment.showReplies ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <BottomSpace />
      </div>
    </Box>
  );
};

export default CommentDrawer;
