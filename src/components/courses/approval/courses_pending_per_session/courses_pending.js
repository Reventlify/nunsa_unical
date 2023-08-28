import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
                className="container"
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
                    <Typography className="mt-2 hover">
                      {item.sch_session} session
                    </Typography>
                    <Typography className="mt-2 hover">
                      By{" "}
                      {startWithCase(
                        `${item.student_fname} ${item.student_lname}`
                      )}
                    </Typography>
                    <Typography className="mt-2 hover">
                      Lecturer: {startWithCase(`${item.lecturer}`)}
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
