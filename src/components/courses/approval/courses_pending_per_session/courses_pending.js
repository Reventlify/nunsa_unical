import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import MobileDashboard from "../../../dashboard/mobile/mobile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { startWithCase } from "../../../../utilities/text";
import BottomSpace from "../../../bottomSpace";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { authActions } from "../../../../store/auth-slice";
import { api } from "../../../../link/API";

const ViewCoursesPending = () => {
  const dispatch = useDispatch();
  const [dynamicLoader, setDynamicLoader] = useState("");
  // const [material_id, setMaterialID] = useState("");
  const [ongoing, setOngoing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const { token } = useSelector((state) => state.auth.user);

  const approveOne = useCallback(async (materialID) => {
    setOngoing(true);
    try {
      console.log(`id: ${materialID}`);
      // const materialID = material_id;
      //api call for sending the user data to the backend
      await fetch(`${api}/user/approve_material`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          materialID,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setDynamicLoader("");
          return setOngoing(false);
        } else if (res.status === 401 || res.status === 403) {
          return dispatch(authActions.logout());
        } else {
          setDynamicLoader("");
          return setOngoing(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <MobileDashboard>
        <div className="container margingTopOutrageous">
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
            {/* <span
              className="float-right nunsa hover"
              onClick={() => {
                return dynamicLoader.length === 0 ? setAllLoader("all") : "";
              }}
            >
              {allLoader !== "all" ? (
                "Approve all"
              ) : (
                <BeatLoader size="12px" color="#61ce70" loading={true} />
              )}
            </span> */}
          </div>
          {data.map((item, i) => {
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
                      {item.course_abbr.toUpperCase()}&nbsp;{item.course_code}
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
                      <span className="bolder">Mat no:</span>{" "}
                      {item.student_mat_no.toUpperCase()}
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
                    <Typography className="mt-2 hover">
                      <button
                        className={
                          ongoing
                            ? "btnct btn btn-secondary"
                            : "btn bottomShadow btnct btnct-nunsa"
                        }
                        type="button"
                        disabled={ongoing ? true : false}
                        onClick={() => {
                          setDynamicLoader(`${i}_approve`);
                          console.log(item.material_id);
                          approveOne(item.material_id);
                        }}
                      >
                        {dynamicLoader !== `${i}_approve` ? (
                          "Approve"
                        ) : (
                          <BeatLoader size="12px" color="#fff" loading={true} />
                        )}
                      </button>
                      <button
                        className="float-right btn bottomShadow btn-danger"
                        type="button"
                        disabled={ongoing ? true : false}
                        onClick={() => {
                          setDynamicLoader(`${i}_delete`);
                          // approveOne(`${i}_delete`);
                        }}
                      >
                        {dynamicLoader !== `${i}_delete` ? (
                          "Delete"
                        ) : (
                          <BeatLoader size="12px" color="#fff" loading={true} />
                        )}
                      </button>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
        <BottomSpace />
      </MobileDashboard>
    </>
  );
};

export default ViewCoursesPending;
