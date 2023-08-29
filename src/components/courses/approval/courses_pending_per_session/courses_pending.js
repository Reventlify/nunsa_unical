import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import MobileDashboard from "../../../dashboard/mobile/mobile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { startWithCase } from "../../../../utilities/text";

const ViewCoursesPending = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  return (
    <>
      <MobileDashboard>
        <div className="container margingTopOutrageous">
          <h4>
            <ArrowBackIcon
              className="hover"
              onClick={() => {
                navigate(-1);
              }}
            />{" "}
            &nbsp;Back
          </h4>
          {data.map((item, i) => {
            return (
              <div
                className=""
                key={`pending_${item.sch_session.slice(0, 2)}_${i}`}
              >
                <Accordion defaultExpanded={i === 0 ? true : false}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="hover">
                      <span className="bold">{startWithCase(item.topic)}</span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="hover nunsa">
                      <span className="bolder">DETAILS</span>
                    </Typography>
                    <Typography className="mt-2 hover">
                      <span className="bolder">Course code:</span>{" "}
                      {/* <span className="bolder"> */}
                      {item.course_abbr.toUpperCase()}&nbsp;{item.course_code}
                      {/* </span> */}
                    </Typography>
                    <Typography className="mt-2 hover">
                      <span className="bolder">Session:</span>{" "}
                      {item.sch_session}
                    </Typography>
                    <Typography className="mt-2 hover">
                      <span className="bolder">By:</span>{" "}
                      {startWithCase(
                        `${item.student_fname} ${item.student_lname}`
                      )}
                    </Typography>
                    <Typography className="mt-2 hover">
                      <span className="bolder">Mat no:</span>{" "}
                      {item.student_mat_no.toUpperCase()}
                    </Typography>
                    <Typography className="mt-2 hover">
                      <span className="bolder">Lecturer:</span>{" "}
                      {startWithCase(`${item.lecturer}`)}
                    </Typography>
                    <Typography className="mt-2 hover">
                      <a href={item.material_media} download>
                        View
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
      </MobileDashboard>
    </>
  );
};

export default ViewCoursesPending;
