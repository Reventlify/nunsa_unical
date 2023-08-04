import { useEffect, useState, useCallback } from "react";
// import classes from "../createPost/createPostMain.module.css";
import CreatePostSmall from "./screenSizes/createPostSmall";
import CreatePostBig from "./screenSizes/createPostBig";

const CreatePostMain = () => {
  return (
    <>
      <CreatePostSmall />
      <CreatePostBig />
    </>
  );
};

export default CreatePostMain;
