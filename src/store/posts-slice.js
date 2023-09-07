import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalPosts: [],
  classPosts: [],
  comments: [],
  newComments: [],
  postComments: null,
  formerPostComments: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  // initialState: initialState,
  reducers: {
    postInsert(state, action) {
      state.generalPosts = action.payload;
    },
    postEdit(state, action) {
      state.generalPosts[action.payload.i].commented =
        action.payload.newData.commented;
      state.generalPosts[action.payload.i].liked = action.payload.newData.liked;
      state.generalPosts[action.payload.i].disliked =
        action.payload.newData.disliked;
      state.generalPosts[action.payload.i].comment_count =
        action.payload.newData.comment_count;
      state.generalPosts[action.payload.i].like_count =
        action.payload.newData.like_count;
      state.generalPosts[action.payload.i].dislike_count =
        action.payload.newData.dislike_count;
    },
    classPostInsert(state, action) {
      state.classPosts = action.payload;
    },
    classPostEdit(state, action) {
      state.classPosts[action.payload.i].commented =
        action.payload.newData.commented;
      state.classPosts[action.payload.i].liked = action.payload.newData.liked;
      state.classPosts[action.payload.i].disliked =
        action.payload.newData.disliked;
      state.classPosts[action.payload.i].comment_count =
        action.payload.newData.comment_count;
      state.classPosts[action.payload.i].like_count =
        action.payload.newData.like_count;
      state.classPosts[action.payload.i].dislike_count =
        action.payload.newData.dislike_count;
    },
    clearAllPosts(state, action) {
      state.generalPosts = [];
      state.classPosts = [];
      state.comments = [];
      state.postComments = null;
    },
    setPostComments(state, action) {
      state.postComments = action.payload;
    },
    commentInsert(state, action) {
      state.comments = action.payload;
    },
    newCommentInsert(state, action) {
      state.newComments = action.payload;
    },
    commentsPersist(state, action) {
      state.formerPostComments = action.payload;
    },
    clearComments(state, action) {
      state.comments = [];
    },
  },
});
export const postsActions = postsSlice.actions;

export default postsSlice;
