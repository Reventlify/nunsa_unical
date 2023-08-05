import { useEffect, useState, useCallback, useRef } from "react";
import one from "../../../images/one.jpg";
import classes from "../createPostMain.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import BottomSpace from "../../bottomSpace";

const CreatePostSmall = () => {
  const navigate = useNavigate();
  const hiddenFileInput = useRef();
  const [opinion, setOpinion] = useState("");
  const [img, setImg] = useState("");

  const back = () => {
    navigate(-1);
  };

  const clearImg = () => {
    setImg("");
  };
  // converts image to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Programatically click the hidden file input element
  // when the Div component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const image = await convertToBase64(fileUploaded);
    setImg(image);
  };

  return (
    <>
      <div>
        {/* <div className={`${classes.small}`}> */}
        <div className={`${classes.headSection}`}>
          <div className={`${classes.headStart}`}>
            <div className={`${classes.head} container`}>
              <div className={`${classes.left}`}>
                <span className="hover" onClick={back}>
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
        <div className={`${classes.inputSection} container  mt-4`}>
          <textarea
            style={
              opinion.length === 0
                ? { height: "10vh" }
                : opinion.length > 0 && opinion.length < 250
                ? { height: "40vh" }
                : {}
            }
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
        {img.length < 1 ? (
          ""
        ) : (
          <div className={`${classes.postImg}`}>
            <div>
              <span className="hover" onClick={clearImg}>
                <ClearIcon className="float-right" />
              </span>
            </div>
            <img
              className={`${classes.postImg}`}
              src={img}
              width="100%"
              alt="blog post image"
            />
          </div>
        )}

        <BottomSpace />
        <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
          <div className="centerDivH">
            <span className="mb-3 mt-2 hover" onClick={handleClick}>
              <AddPhotoAlternateIcon
                className="nunsa"
                style={{ fontSize: "42px" }}
              />
            </span>
          </div>
        </div>
        <input
          type="file"
          accept=".jpeg, .png, .jpg, .svg"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
    </>
  );
};

export default CreatePostSmall;
