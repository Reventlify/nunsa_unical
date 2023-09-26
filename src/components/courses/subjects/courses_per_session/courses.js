import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import MobileDashboard from "../../../dashboard/mobile/mobile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { startWithCase } from "../../../../utilities/text";
import BottomSpace from "../../../bottomSpace";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { authActions } from "../../../../store/auth-slice";
import { api } from "../../../../link/API";
import FullLoader from "../../../loader/fullLoader/FullLoader";

const ViewCourses = () => {
  const dispatch = useDispatch();
  const { session, course } = useParams();
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);

  // fetches materials on page load
  const getMaterialsForASession = useCallback(async () => {
    try {
      //api call for sending the user data to the backend
      await fetch(`${api}/user/approved_materials/${session}/${course}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const datai = await res.json();
        if (res.status === 200) {
          setData(datai);
          return setFetching(false);
        } else if (res.status === 401 || res.status === 403) {
          return dispatch(authActions.logout());
        } else {
          setData(datai);
          return setFetching(false);
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }, []);
  useEffect(() => {
    getMaterialsForASession();
  }, [getMaterialsForASession]);

  if (fetching) {
    return <FullLoader />;
  } else {
    return (
      <>
        <MobileDashboard>
          <div className="container marginTopOutrageous">
            <div>
              <h6 className="inline-block">
                <ArrowBackIcon
                  className="hover"
                  onClick={() => {
                    navigate(-1);
                  }}
                />{" "}
                &nbsp;Back
              </h6>
            </div>
            {typeof data !== "string" && data.length > 0 && data !== null ? (
              data.map((item, i) => {
                return (
                  <div
                    className={i > 0 ? "mt-3" : ""}
                    key={`pending_${item.sch_session.slice(0, 2)}_${i}`}
                  >
                    <Accordion defaultExpanded={i === 0 ? true : false}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className="hover">
                          <span className="bold">
                            <span className="nunsa">Topic</span>:{" "}
                            {startWithCase(item.topic)}
                          </span>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="nunsa">
                          <span className="bolder">DETAILS</span>
                        </Typography>
                        <Typography className="mt-2">
                          <span className="bolder">Course code:</span>{" "}
                          {/* <span className="bolder"> */}
                          {item.course_abbr.toUpperCase()}&nbsp;
                          {item.course_code}
                          {/* </span> */}
                        </Typography>
                        <Typography className="mt-2">
                          <span className="bolder">Session:</span>{" "}
                          {item.sch_session}
                        </Typography>
                        <Typography className="mt-2">
                          <span className="bolder">By:</span>{" "}
                          {startWithCase(
                            `${item.student_fname} ${item.student_lname}`
                          )}
                        </Typography>
                        <Typography className="mt-2">
                          <span className="bolder">Lecturer:</span>{" "}
                          {startWithCase(`${item.lecturer}`)}
                        </Typography>
                        <Typography className="mt-2">
                          <span className="bolder">Date:</span>{" "}
                          {moment(item.uploadedat).format("MMM DD, YYYY")}
                        </Typography>
                        <Typography className="mt-2">
                          <span className="bolder">Time:</span>{" "}
                          {moment(item.uploadedat).format("HH:mm A")}
                        </Typography>
                        <Typography className="mt-2 hover">
                          <a href={item.material_media}>View</a>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })
            ) : (
              <div className="centerDiv fullscreen-30 container">
                <h4 className="blogText center">No course awaiting approval</h4>
              </div>
            )}
          </div>
          <BottomSpace />
        </MobileDashboard>
      </>
    );
  }
};

export default ViewCourses;
