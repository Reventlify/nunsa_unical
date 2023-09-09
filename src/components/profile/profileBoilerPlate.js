import MobileDashboard from "../dashboard/mobile/mobile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailIcon from "@mui/icons-material/Mail";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "../profile/profile.module.css";
import screenSize from "../../utilities/screenSize";
import NameAndAbout from "./nameAndAbout";

const ProfileBoilerPlate = ({ exco, nos_cleared }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  if (exco === undefined) {
    if (id === user.user_id) {
      return (
        // <MobileDashboard>
        <div className="">
          <div className={`${classes.dp}`}>
            {user.photo === null ? (
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
                    <div
                      className={`round hover bg-nunsa ${classes.mailHolder}`}
                    >
                      <AddAPhotoIcon
                        className={`white ${classes.mailIcon}`}
                        onClick={() => {
                          navigate(
                            `/student/messages/chat/${user.user_id}_${id}`
                          );
                        }}
                      />
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
                  <div
                    className={`${classes.backImg} hover bg-nunsa ml-2 mt-2`}
                  >
                    <ArrowBackIcon
                      className="white"
                      sx={{ fontSize: "30px" }}
                      onClick={() => {
                        navigate(-1);
                      }}
                    />
                  </div>
                  <div className={`${classes.mail}`}>
                    <div
                      className={`round hover bg-nunsa ${classes.mailHolder}`}
                    >
                      <AddAPhotoIcon
                        className={`white ${classes.mailIcon}`}
                        onClick={() => {
                          navigate(
                            `/student/messages/chat/${user.user_id}_${id}`
                          );
                        }}
                      />
                    </div>
                  </div>
                  <img
                    src="https://nunsaunicaldev.onrender.com/static/media/one.4d5be3c99fd5bc95b474.jpg"
                    alt="your profile"
                    width="100%"
                    height="100%"
                    className={`${classes.profileImg}`}
                  />
                </div>
              </div>
            )}
            <NameAndAbout />
          </div>
        </div>
        // </MobileDashboard>
      );
    }
    return (
      <div className="">
        <div className={`${classes.dp}`}>
          {user.photo === null ? (
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
                        navigate(
                          `/student/messages/chat/${user.user_id}_${id}`
                        );
                      }}
                    />
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
                    <MailIcon
                      className={`white ${classes.mailIcon}`}
                      onClick={() => {
                        navigate(
                          `/student/messages/chat/${user.user_id}_${id}`
                        );
                      }}
                    />
                  </div>
                </div>
                <img
                  src="https://nunsaunicaldev.onrender.com/static/media/one.4d5be3c99fd5bc95b474.jpg"
                  alt="your profile"
                  width="100%"
                  height="100%"
                  className={`${classes.profileImg}`}
                />
              </div>
            </div>
          )}
          <NameAndAbout />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Student Profile</h1>
      </div>
    );
  }
};

export default ProfileBoilerPlate;
