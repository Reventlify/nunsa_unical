import { formatCompactNumber } from "../../../utilities/number";
import { startWithCase } from "../../../utilities/text";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import classes from "../studentDash.module.css";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../../link/API";
import { postsActions } from "../../../store/posts-slice";
import { authActions } from "../../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SeeMore from "../../../utilities/seemore";

const PostComments = ({ comment, index, path }) => {
  const { token } = useSelector((state) => state.auth.user);
  const { postComments, generalPosts, classPosts } = useSelector(
    (state) => state.posts
  );
  const navigate = useNavigate();
  const postP = path === "class" ? classPosts : generalPosts;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const indexOfPost = postP.findIndex((post) => post.post_id === postComments);

  const toProfile = () => {
    navigate(`/student/profile/${comment.commenter_id}`);
  };

  const handleCommentAction =
    // useCallback(
    async (action, id, i, pId) => {
      // Handle comment submission here, using studentOpinion and studentOpinionTo
      // e.preventDefault();
      setLoading(true);
      try {
        await fetch(`${api}/user/posts/${pId}/comment/${action}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            commentID: id,
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 200) {
            setLoading(false);
            dispatch(postsActions.commentsPersist(postComments));
            dispatch(postsActions.setPostComments(postComments));
            return dispatch(postsActions.commentInsert(data.postComments));
            // if (path === "class") {
            //   return dispatch(
            //     postsActions.classPostEdit({
            //       newData: data.post,
            //       i,
            //     })
            //   );
            // } else {
            //   return dispatch(
            //     postsActions.postEdit({
            //       newData: data.post,
            //       i,
            //     })
            //   );
            // }
          } else if (res.status === 401 || res.status === 403) {
            return dispatch(authActions.logout());
          } else {
            return setLoading(false);
          }
        });
      } catch (error) {
        return console.error(error);
      }
    };

  const showImg = () => {
    if (comment.commenter_photo !== null) {
      window.open(comment.commenter_photo, "_blank");
      // window.location.href = post.post_media;
    }
  };

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
    <div className={`${classes.notification} mt-3`}>
      <div className={`${classes.commIMG}`}>
        {comment.commenter_photo !== null ? (
          <img
            src={comment.commenter_photo}
            alt="commenter"
            width="40px"
            height="40px"
            className="round"
            onClick={showImg}
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
      <div className="ml-2">
        <div className={`${classes.commText} paddFull-1`}>
          <span className="block">
            <span className="bold hover" onClick={toProfile}>
              {startWithCase(
                `${comment.commenter_fname} ${comment.commenter_lname}`
              )}
            </span>
            <br />
            <SeeMore text={comment.comment_text} />
          </span>
          <span className={`block ${classes.notTime}`}>
            <span className="nunsa">{formatDateGroupTitle()}</span>
          </span>
        </div>
        <div className={`container mt-2 blogText ${classes.likeandReply}`}>
          <div
            onClick={() => {
              if (loading) {
                return;
              } else {
                handleCommentAction(
                  "like_comment",
                  comment.comment_id,
                  index,
                  postComments
                );
              }
            }}
          >
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
          <div
            className="ml-2"
            onClick={() => {
              if (loading) {
                return;
              } else {
                handleCommentAction(
                  "dislike_comment",
                  comment.comment_id,
                  index,
                  postComments
                );
              }
            }}
          >
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
