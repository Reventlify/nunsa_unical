import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UploadIcon from "@mui/icons-material/Upload";
import BottomSpace from "../bottomSpace";
import { useNavigate } from "react-router-dom";
import { years } from "../../testData/tesData";
import { useSelector } from "react-redux";

const CoursesMain = () => {
  const navigate = useNavigate();
  const { approvePDF } = useSelector(
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
      {years.map((year) => {
        return (
          <div key={`${year.year}_materials`}>
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
                {(!approvePDF && level.slice(0, 1) === year.year.slice(-1)) ||
                user_role === "pres" ||
                user_role === "v_pres" ? (
                  <Typography
                    className="mt-2 hover"
                    onClick={() => {
                      toPageInitiator("review", year.year);
                    }}
                  >
                    <UploadIcon className="nunsa" />
                    &nbsp;&nbsp;{" "}
                    <span className="blogText">Review a material</span>
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
