import React, { useCallback, useEffect, useState } from "react";
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

const CommentDrawer = ({ anchor, toggleComments }) => {
  const dispatch = useDispatch();
  const { postComments, comments } = useSelector((state) => state.posts);
  const { token } = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [opinion, setOpinion] = useState("");

  const getComments = useCallback(async () => {
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
        dispatch(postsActions.commentInsert(data));
        setFetching(false);
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
    getComments();
  }, [getComments]);
  return (
    <Box
      sx={{
        height: "80vh",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
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
        <h5 className="mt-3 bold">Comments</h5>
      </div>
      <div className="container">
        <div className={`${classes.othersOpinion}`}>
          {fetching ? (
            <CustomLoader height={"60vh"} size={18} />
          ) : (
            comments.map((comment, i) => {
              return <PostComments comment={comment} index={i} />;
            })
          )}
        </div>

        <div className={`float-bottom ${classes.studOpinionDraw}`}>
          <div className="" style={{ display: "flex", flexDirection: "row" }}>
            <textarea
              placeholder="Add a comment..."
              id="IdOfCommentArea"
              onBlur={() => {
                // setStudentOpinion("");
                document.getElementById(`IdOfCommentArea`).value = "";
              }}
              className={`form-control onfocusOpinion ${classes.studOpinion}`}
              autoComplete="off"
              autoCorrect="off"
              aria-describedby="regimeDescriptionHelp"
              // value={regimeDescription}
              onChange={(e) => setOpinion(e.target.value)}
              required
            />
            {opinion !== "" ? (
              <div className="reventlify hover centerDiv">Post</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <BottomSpace />
      </div>
    </Box>
  );
};

export default CommentDrawer;
