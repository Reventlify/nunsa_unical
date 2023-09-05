import { useEffect, useState, useCallback, useRef } from "react";
import one from "../../../images/one.jpg";
import classes from "../createPostMain.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import BottomSpace from "../../bottomSpace";
import { api } from "../../../link/API";
import { useDispatch, useSelector } from "react-redux";
import OnSuccess from "../../success/onSuccess";
import { authActions } from "../../../store/auth-slice";

const CreatePostSmall = ({ path }) => {
  const dispatch = useDispatch();
  const { token, user_session } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const hiddenFileInput = useRef();
  const [opinion, setOpinion] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [dip, setDip] = useState("none");

  const back = () => {
    navigate(-1);
  };

  const clearImg = () => {
    setImg(null);
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
    if (Number(fileUploaded.size) > 10 * 1024 * 1024) {
      setError(
        "Image size is larger than 10MB only your text would be uploaded if you proceed."
      );
      return setDip("block");
    } else if (
      fileUploaded.name.slice(-5) === ".jpeg" ||
      fileUploaded.name.slice(-4) === ".png" ||
      fileUploaded.name.slice(-4) === ".jpg" ||
      fileUploaded.name.slice(-4) === ".svg"
    ) {
      const image = await convertToBase64(fileUploaded);
      return setImg(image);
    } else {
      setError("Please upload a .jpeg, .png, .jpg or .svg file.");
      return setDip("block");
    }
  };

  const postUpload =
    // useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        //api call for sending the user data to the backend
        await fetch(`${api}/user/postupload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            postText: opinion,
            img,
            schSession: path === "class" ? user_session : null,
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 401 || res.status === 403) {
            setLoading(false);
            return dispatch(authActions.logout());
          } else if (res.status === 200) {
            setLoading(false);
            return setSuccess(true);
          } else {
            // setLoading(false);
            // setError(data);
            return setLoading(false);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
  // , []);

  // useEffect(() => {
  //   return;
  // }, []);

  if (success) {
    return (
      <OnSuccess time={3500} to={back} message={"Uploaded Successfully !"} />
    );
  } else {
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
                    onClick={postUpload}
                    className={
                      opinion.length === 0 || loading
                        ? "btnct btn  btn-secondary"
                        : "btn bottomShadow btnct btnct-nunsa"
                    }
                    disabled={opinion.length === 0 || loading ? true : false}
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
            {error && ( // then if changed flag is false show error message.
              <div className="mb-2" style={{ color: "red", display: { dip } }}>
                <span>{error}</span>
              </div>
            )}
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
          {img === null ? (
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
  }
};

export default CreatePostSmall;
