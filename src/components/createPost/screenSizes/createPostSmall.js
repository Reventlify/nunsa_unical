import { useEffect, useState, useCallback } from "react";
import one from "../../../images/one.jpg";
import classes from "../createPostMain.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";

const CreatePostSmall = () => {
  const navigate = useNavigate();
  const [opinion, setOpinion] = useState("");
  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={`${classes.small}`}>
        <div className={`${classes.headSection}`}>
          <div className={`${classes.headStart}`}>
            <div className={`${classes.head} container`}>
              <div className={`${classes.left}`}>
                <span onClick={back}>
                  <ArrowBackIcon />
                </span>
                &nbsp;
                <span className="bolder" onClick={back}>
                  Create Post
                </span>
              </div>
              <div className={`${classes.right}`}>
                <button
                  className={
                    opinion.length > 0
                      ? "btn bottomShadow btnct btnct-nunsa"
                      : "btnct btn  btn-secondary"
                  }
                  disabled={opinion.length > 0 ? false : true}
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.headEnd}`}>
          <div className={`${classes.headEndSub} container`}>
            <div className={`${classes.userImg}`}>
              <img
                src={one}
                alt="user"
                width="55px"
                height="55px"
                className="round"
              />
            </div>
            <div classes={`${classes.userDetails}`}>
              <h6 className="bolder">Ezra Madu</h6>
              <div>
                <button className="btn btn-sm btn-primary">General</button>
                <button className="btn btn-sm btn-outline-primary ml-2">
                  &nbsp;Class&nbsp;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.inputSection}  mt-4`}>
          <textarea
            placeholder="What's on your mind?"
            // onBlur={() => {
            //   setStudentOpinion("");
            //   document.getElementById(`IdOfCommentArea`).value = "";
            // }}
            className={`form-control ${classes.postInput}`}
            autoComplete="off"
            autoCorrect="off"
            aria-describedby="regimeDescriptionHelp"
            onChange={(e) => setOpinion(e.target.value)}
            // required
          />
        </div>
        <div className={`fixed-bottom`} style={{ width: "100%" }}>
          <div className="centerDivH">
            <span
              className="mb-3 hover"
              // onClick={handleCreation}
            >
              <AddPhotoAlternateIcon
                className="nunsa"
                style={{ fontSize: "42px" }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostSmall;
