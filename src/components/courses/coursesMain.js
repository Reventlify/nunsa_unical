import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TaskIcon from "@mui/icons-material/Task";
import UploadIcon from "@mui/icons-material/Upload";
import BottomSpace from "../bottomSpace";
import { useNavigate } from "react-router-dom";
import { years } from "../../testData/tesData";
import { useSelector } from "react-redux";

const CoursesMain = () => {
  const navigate = useNavigate();
  const { approvePDF, viewStudents } = useSelector(
    (state) => state.auth.user.user_permissions
  );
  const { level, user_role } = useSelector((state) => state.auth.user);
  const toPageInitiator = (action, value) => {
    if (action.length > 0 && value.length > 0) {
      return navigate(`materials/${action}/${value}`);
    } else {
      return;
    }
  };

  return (
    <div className="container margingTopOutrageous">
      <h4>PDF materials for all levels</h4>
      {years.map((year, i) => {
        return (
          <div className={i > 0 ? "mt-3" : ""} key={`${year.year}_materials`}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{year.year.replace("_", " ")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="hover"
                  onClick={() => {
                    toPageInitiator("view", year.year);
                  }}
                >
                  <RemoveRedEyeIcon className="nunsa" />
                  &nbsp;&nbsp;{" "}
                  <span className="blogText">
                    View yr{year.year.slice(-1)} courses
                  </span>
                </Typography>
                <Typography
                  className="mt-2 hover"
                  onClick={() => {
                    toPageInitiator("upload", year.year);
                  }}
                >
                  <UploadIcon className="nunsa" />
                  &nbsp;&nbsp;{" "}
                  <span className="blogText">Upload a material</span>
                </Typography>
                {user_role === "course rep" &&
                level.slice(0, 1) === year.year.slice(-1) ? (
                  <Typography
                    className="mt-2 hover"
                    onClick={() => {
                      toPageInitiator("review", year.year);
                    }}
                  >
                    <TaskIcon className="nunsa" />
                    &nbsp;&nbsp;{" "}
                    <span className="blogText">Review materials</span>
                  </Typography>
                ) : (
                  ""
                )}
                {approvePDF && viewStudents ? (
                  <Typography
                    className="mt-2 hover"
                    onClick={() => {
                      toPageInitiator("review", year.year);
                    }}
                  >
                    <TaskIcon className="nunsa" />
                    &nbsp;&nbsp;{" "}
                    <span className="blogText">Review materials</span>
                  </Typography>
                ) : (
                  ""
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
      <BottomSpace />
    </div>
  );
};

export default CoursesMain;
