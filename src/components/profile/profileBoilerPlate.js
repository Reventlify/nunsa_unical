import MobileDashboard from "../dashboard/mobile/mobile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classes from "../profile/profile.module.css";

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
                      className="hover reventlify"
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
              <img
                src={user.photo}
                alt="your profile"
                width="165px"
                height="165px"
                className="round"
              />
            )}
          </div>
        </div>
        // </MobileDashboard>
      );
    }
    return (
      <MobileDashboard>
        <div className="margingTopOutrageous">
          <h1>Student Profile Not Ex</h1>
        </div>
      </MobileDashboard>
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
