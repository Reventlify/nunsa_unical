import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailIcon from "@mui/icons-material/Mail";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "../profile/profile.module.css";
import screenSize from "../../utilities/screenSize";
import NameAndAbout from "./nameAndAbout";
import { useCallback, useEffect, useRef, useState } from "react";
import { authActions } from "../../store/auth-slice";
import CustomLoader from "../loader/customLoader/CustomLoader";
import { api } from "../../link/API";
import { startWithCase } from "../../utilities/text";
import levelDeterminant from "../../utilities/session";
import NameAndAboutExco from "./nameAndAboutExco";

const ProfileBoilerPlate = ({ exco, nos_cleared, details, id }) => {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dip, setDip] = useState("none");
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

  const updateProfileImg = useCallback(async () => {
    // e.preventDefault();
    setLoading(true);
    try {
      //api call for sending the user data to the backend
      await fetch(`${api}/user/upload_dp`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          img,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 401 || res.status === 403) {
          setLoading(false);
          return dispatch(authActions.logout());
        } else if (res.status === 200) {
          dispatch(authActions.updatePhoto(data));
          return setLoading(false);
        } else {
          // setLoading(false);
          // setError(data);
          setImg(null);
          return setLoading(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, img, user.token]);

  useEffect(() => {
    if (img !== null) {
      updateProfileImg();
    }
  }, [img, updateProfileImg]);

  const showImg = (photo) => {
    if (photo !== null) {
      window.open(photo, "_blank");
      // window.location.href = post.post_media;
    }
  };

  const repitionContainer = () => {
    if (id === user.user_id) {
      return (
        <>
          {user.photo === null && img === null ? (
            <div className={`${classes.theGParent}`}>
              <div
                className={`container relative centerDiv ${classes.theParent}`}
              >
                <div className={`${classes.back} ml-2 mt-2`}>
                  <ArrowBackIcon
                    className="hover white"
                    sx={{ fontSize: "30px" }}
                    onClick={() => {
                      navigate(-1);
                    }}
                  />
                </div>
                <div className={`${classes.mail}`}>
                  <div className={`round hover bg-nunsa ${classes.mailHolder}`}>
                    {loading ? (
                      <CustomLoader height={"auto"} size={14} color={"#fff"} />
                    ) : (
                      <AddAPhotoIcon
                        className={`white ${classes.mailIcon}`}
                        onClick={handleClick}
                      />
                    )}
                  </div>
                </div>
                <AccountCircleIcon
                  className="white"
                  sx={{ fontSize: "165px" }}
                />
              </div>
            </div>
          ) : (
            <div className={`${classes.theGParentM}`}>
              <div
                className={
                  screenSize() < 750
                    ? `relative centerDiv ${classes.theParentM}`
                    : `container relative centerDiv ${classes.theParentM}`
                }
              >
                <div className={`${classes.backImg} hover bg-nunsa ml-2 mt-2`}>
                  <ArrowBackIcon
                    className="white"
                    sx={{ fontSize: "30px" }}
                    onClick={() => {
                      navigate(-1);
                    }}
                  />
                </div>
                <div className={`${classes.mail}`}>
                  <div className={`round hover bg-nunsa ${classes.mailHolder}`}>
                    {loading ? (
                      <CustomLoader height={"auto"} size={14} color={"#fff"} />
                    ) : (
                      <AddAPhotoIcon
                        className={`white ${classes.mailIcon}`}
                        onClick={handleClick}
                      />
                    )}
                  </div>
                </div>
                <img
                  src={img === null ? user.photo : img}
                  alt="your profile"
                  width="100%"
                  height="100%"
                  onClick={() => {
                    showImg(user.photo);
                  }}
                  className={`${classes.profileImg}`}
                />
              </div>
            </div>
          )}
          {error && ( // then if changed flag is false show error message.
            <div className="mb-2" style={{ color: "red", display: { dip } }}>
              <span>{error}</span>
            </div>
          )}
          {/* <NameAndAbout
            user_name={startWithCase(`${user.user_fname} ${user.user_lname}`)}
            level={user.level}
          /> */}

          {exco ? (
            <NameAndAboutExco
              role={user.user_role}
              user_name={startWithCase(`${user.user_fname} ${user.user_lname}`)}
              about={user.about}
              level={user.level}
              nos_cleared={nos_cleared}
            />
          ) : (
            <NameAndAbout
              role={user.user_role}
              user_name={startWithCase(`${user.user_fname} ${user.user_lname}`)}
              about={user.about}
              level={user.level}
              edit={true}
              token={user.token}
            />
          )}
          <input
            type="file"
            accept=".jpeg, .png, .jpg, .svg"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </>
      );
    }
    return (
      <>
        {details === undefined || details.student_photo === null ? (
          <div className={`${classes.theGParent}`}>
            <div
              className={`container relative centerDiv ${classes.theParent}`}
            >
              <div className={`${classes.back} ml-2 mt-2`}>
                <ArrowBackIcon
                  className="hover white"
                  sx={{ fontSize: "30px" }}
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              </div>
              <div className={`${classes.mail}`}>
                <div className={`round hover bg-nunsa ${classes.mailHolder}`}>
                  <MailIcon
                    className={`white ${classes.mailIcon}`}
                    onClick={() => {
                      navigate(`/student/messages/chat/${user.user_id}_${id}`);
                    }}
                  />
                </div>
              </div>
              <AccountCircleIcon className="white" sx={{ fontSize: "165px" }} />
            </div>
          </div>
        ) : (
          <div className={`${classes.theGParentM}`}>
            <div
              className={
                screenSize() < 750
                  ? `relative centerDiv ${classes.theParentM}`
                  : `container relative centerDiv ${classes.theParentM}`
              }
            >
              <div className={`${classes.backImg} hover bg-nunsa ml-2 mt-2`}>
                <ArrowBackIcon
                  className="white"
                  sx={{ fontSize: "30px" }}
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              </div>
              <div className={`${classes.mail}`}>
                <div className={`round hover bg-nunsa ${classes.mailHolder}`}>
                  <MailIcon
                    className={`white ${classes.mailIcon}`}
                    onClick={() => {
                      navigate(`/student/messages/chat/${user.user_id}_${id}`);
                    }}
                  />
                </div>
              </div>
              <img
                src={details.student_photo}
                alt="your profile"
                width="100%"
                height="100%"
                onClick={() => {
                  showImg(details.student_photo);
                }}
                className={`${classes.profileImg}`}
              />
            </div>
          </div>
        )}
        {exco ? (
          <NameAndAboutExco
            role={details.student_role}
            user_name={startWithCase(
              `${details.student_fname} ${details.student_lname}`
            )}
            about={details.student_about}
            level={levelDeterminant(details.sch_session)}
            nos_cleared={nos_cleared}
          />
        ) : (
          <NameAndAbout
            role={details.student_role}
            user_name={startWithCase(
              `${details.student_fname} ${details.student_lname}`
            )}
            about={details.student_about}
            level={levelDeterminant(details.sch_session)}
          />
        )}
      </>
    );
  };

  if (exco) {
    return <div>{repitionContainer()}</div>;
  } else {
    return <div>{repitionContainer()}</div>;
  }
};

export default ProfileBoilerPlate;
