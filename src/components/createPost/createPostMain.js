import { useEffect, useState, useCallback } from "react";
// import classes from "../createPost/createPostMain.module.css";
import CreatePostSmall from "./screenSizes/createPostSmall";
import { useLocation } from "react-router-dom";

const CreatePostMain = () => {
  const location = useLocation()
  const path = location.state;
  return (
    <>
      <CreatePostSmall path={path} />
    </>
  );
};

export default CreatePostMain;
