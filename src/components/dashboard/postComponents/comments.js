import { formatCompactNumber } from "../../../utilities/number";
import { startWithCase } from "../../../utilities/text";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import classes from "../studentDash.module.css";

const PostComments = ({ comment, index }) => {
  const formatDateGroupTitle = () => {
    const today = moment().format("MMM D, YYYY");
    const yesterday = moment().subtract(1, "days").format("MMM D, YYYY");

    if (moment(comment.comment_date).format("MMM D, YYYY") === today) {
      return `${moment(comment.comment_date).format("h:mm A")}, Today.`;
    } else if (
      moment(comment.comment_date).format("MMM D, YYYY") === yesterday
    ) {
      return `${moment(comment.comment_date).format("h:mm A")}, Yesterday.`;
    } else {
      return moment(comment.comment_date).format("h:mm A, MMM D, YYYY.");
    }
  };
  return (
    <div className={`${classes.notification} mt-3`} key={comment.comment_id}>
      <div className={`${classes.commIMG}`}>
        {comment.commenter_photo !== null ? (
          <img
            src={comment.commenter_photo}
            alt="commenter"
            width="40px"
            height="40px"
            className="round"
          />
        ) : (
          <AccountCircleIcon
            style={{
              fontSize: "40px",
              color: "#adadad",
              //   marginRight: "0.7rem",
              //   padding: 0,
            }}
          />
        )}
      </div>
      <div className="hover ml-2">
        <div className={`${classes.commText} paddFull-1`}>
          <span className="block">
            <span className="bold">
              {startWithCase(
                `${comment.commenter_fname} ${comment.commenter_lname}`
              )}
            </span>
            <br />
            {comment.comment_text}
          </span>
          <span className={`block ${classes.notTime}`}>
            <span className="nunsa">{formatDateGroupTitle()}</span>
          </span>
        </div>
        <div className={`container mt-2 blogText ${classes.likeandReply}`}>
          <div>
            {comment.liked === "yes" ? (
              <ThumbUpAltIcon className="hover nunsa" />
            ) : (
              <ThumbUpOffAltIcon className="hover" />
            )}
            {/* <ThumbUpOffAltIcon /> */}
            &nbsp;
            <span className="hover">
              {formatCompactNumber(comment.like_count)}
            </span>
          </div>
          {/* <div className="ml-2 hover">Reply</div> */}
          <div className="ml-2">
            {comment.disliked === "yes" ? (
              <ThumbDownAltIcon className="hover nunsa" />
            ) : (
              <ThumbDownOffAltIcon className="hover" />
            )}
            {/* <ThumbDownOffAltIcon /> */}
            &nbsp;
            <span className="hover">
              {formatCompactNumber(comment.dislike_count)}
            </span>
          </div>
        </div>
        {/* {comment.replyCount > 0 ? (
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
        )} */}
      </div>
    </div>
  );
};

export default PostComments;
