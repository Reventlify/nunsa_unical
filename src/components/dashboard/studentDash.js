import React, { useState, useEffect } from "react";
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

const StudentDash = ({ path }) => {
  const { token } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const editPost = (newData, index) => {
  //   console.log(`before code block: ${newData}`);
  //   if (typeof newData === "object") {
  //     console.log(`entered code block: ${newData}`);
  //     posts[index].commented = newData.commented;
  //     posts[index].liked = newData.liked;
  //     posts[index].disliked = newData.disliked;
  //     posts[index].comment_count = newData.commented;
  //     posts[index].like_count = newData.like_count;
  //     posts[index].dislike_count = newData.dislike_count;
  //   } else {
  //     return;
  //   }
  // };

  const editPost = (newData, index) => {
    if (typeof newData === "object") {
      const updatedPost = {
        ...posts[index], // Copy the existing post
        commented: newData.commented,
        liked: newData.liked,
        disliked: newData.disliked,
        comment_count: newData.comment_count,
        like_count: newData.like_count,
        dislike_count: newData.dislike_count,
      };
      // Update the posts array with the updated post at the specified index
      const updatedPosts = [...posts];
      updatedPosts[index] = updatedPost;
      setPosts(updatedPosts); // Update the state with the new array
    } else {
      return;
    }
  };

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
          setPosts(data);
          setLoading(false);
        } else if (response.status === 401 || response.status === 403) {
          dispatch(authActions.logout());
        } else {
          const data = await response.json();
          setPosts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getPosts();
  }, [token, path, dispatch]);

  if (loading) {
    return <FullLoader />;
  }

  return (
    <>
      <DashSearchAndNotifications />
      <div className={`${classes.layHelp} ${classes.content} container`}>
        {posts.length === 0 ? (
          <div className="blogText centerDiv fullscreen-30">
            <h1>Nothing to show...</h1>
          </div>
        ) : (
          <>
            {posts.map((post, i) => (
              <StudentPost
                key={post.post_id}
                updatePosts={editPost}
                post={post}
                index={i}
              />
            ))}
          </>
        )}
      </div>
      <CreatePost path={path} />
    </>
  );
};

export default StudentDash;
